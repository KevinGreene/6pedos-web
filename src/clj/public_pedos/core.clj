(ns public-pedos.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as ring]
            [ring.middleware.json :as middleware]
            [ring.middleware.session :as sessions]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.util.response :refer [resource-response response]]
            [compojure.handler :as handler]
            [cheshire.core :refer :all]
            [cemerick.friend :as friend]
            [friend-oauth2.workflow :as oauth2]
            [friend-oauth2.util :refer [format-config-uri]]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [environ.core :refer [env]]
            [clj-http.client :as http-client]
            [somnium.congomongo :as cm]
            [clojure.set :refer :all]))

(def conn 
  (cm/make-connection 
   (env :db-name)
   :host (env :db-host)
   :port (env :db-port)))

(defn authenticate-mongo [] (cm/authenticate conn (env :db-user) (env :db-password)))

(defn credential-fn [token]
  {:identity token :roles #{::user}})

(def oauth-domain  (env :oauth-domain))

(def oauth-callback (env :oauth-callback))

(def client-id (env :client-id))

(def client-secret (env :client-secret))

(def auth-url (env :auth-url))

(def token-url (env :token-url))

(def heroku-api-url (env :heroku-api-url))

(def csrf-token (env :csrf-token))

(def callback-url (env :callback-url))

(def client-config
  {:client-id client-id
   :client-secret client-secret
   :callback  {:domain oauth-domain :path oauth-callback}})

(def uri-config 
  {:authentication-uri {:url auth-url
                          :query {:client_id (:client-id client-config)
                                  :response_type "code"
                                  :redirect_uri callback-url
                                  :scope "read,identity"}}
  :access-token-uri {:url token-url
                     :query {:client_id (:client-id client-config)
                             :client_secret (:client-secret client-config)
                             :grant_type "authorization_code"
                             :state csrf-token
                             :redirect_uri (format-config-uri client-config)}}})

(defn new-uuid [] (.toString (java.util.UUID/randomUUID)))

(defn user-access-token [request]
  (get-in (friend/current-authentication request) [:identity :access-token]))

(defn set-authorization-header! [request]
  (assoc-in request [:headers "Authorization"] (str "Bearer " (user-access-token request))))

(defn list-apps [token]
  (http-client/get "https://api.heroku.com/apps" {:headers {"Authorization" (str "Bearer " token)} :as :json}))

(defn apps-name [apps]
  (map (fn [it] (:name it)) apps))

(defn all-apps [request]
  (:body (list-apps (user-access-token request))))

(defn user-heroku-apps [user-info]
  (cm/fetch-one :user_heroku_apps :where {:heroku-id (:heroku-id user-info)}))

(defn save-user-info [user-info]
  (cm/insert! :user_heroku_apps user-info))

(defn- fetch-user-heroku-info [token]
  (http-client/get "https://api.heroku.com/account" {:headers {"Authorization" (str "Bearer " token)} :as :json}))

(defn user-heroku-info [token]
  (rename-keys 
   (select-keys 
    (->> token
         (fetch-user-heroku-info)
         (:body))
    [:id :email])
   {:id :heroku-id})
 )


(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/auth/callback" request
       (do
         (resource-response "secured.html" {:root "public"})))
  (GET "/secured" request
       (friend/authorize #{::user}
                         (let [token (user-access-token request)
                               heroku-info (user-heroku-info token)
                               user-info (user-heroku-apps heroku-info)]
                           (do
                           (if (nil? user-info)
                             (save-user-info (assoc heroku-info :app-id (new-uuid))))
                           (resource-response "secured.html" {:root "public"}))
                        )))
  (GET "/api/apps" request
       (friend/authorize #{::user}
                         (do 
                           (response (:body (list-apps (user-access-token request)))))))
  (friend/logout (ANY "/logout" request (ring.util.response/redirect "/")))
  (route/resources "/"))

(def app
  (sessions/wrap-session
   (routes
    (-> app-routes
        (friend/authenticate
         {:allow-anon? true
          :workflows [(oauth2/workflow 
                       {:client-config client-config
                        :uri-config uri-config
                        :credential-fn credential-fn})]})
        handler/site
        (wrap-restful-format)))))

(defn -main []
  (cheshire.generate/add-encoder org.bson.types.ObjectId cheshire.generate/encode-str)
  (cm/set-connection! conn)
  (authenticate-mongo)
  (ring/run-jetty #'app {:port 3000 :join? false}))


