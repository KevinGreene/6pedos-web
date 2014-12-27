(ns public-pedos.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as ring]
            [ring.middleware.json :as middleware]
            [ring.middleware.session :as sessions]
            [ring.util.response :refer [resource-response response]]
            [compojure.handler :as handler]
            [cheshire.core :refer :all]
            [cemerick.friend :as friend]
            [friend-oauth2.workflow :as oauth2]
            [friend-oauth2.util :refer [format-config-uri]]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [environ.core :refer [env]]
            [clj-http.client :as http-client]))

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
                                  :scope "read"}}
  :access-token-uri {:url token-url
                     :query {:client_id (:client-id client-config)
                             :client_secret (:client-secret client-config)
                             :grant_type "authorization_code"
                             :state csrf-token
                             :redirect_uri (format-config-uri client-config)}}})

(defn user-access-token [request]
  (get-in (friend/current-authentication request) [:identity :access-token]))

(defn set-authorization-header! [request]
  (assoc-in request [:headers "Authorization"] (str "Bearer " (user-access-token request))))

(defn list-apps [token]
  (http-client/get "https://api.heroku.com/apps" {:headers {"Authorization" (str "Bearer " token)}}))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/auth/callback" request
       (do
         (resource-response "secured.html" {:root "public"})))
  (GET "/secured" request
       (friend/authorize #{::user}
                         (do
                           (resource-response "secured.html" {:root "public"}))))
  (GET "/api/apps" request
       (friend/authorize #{::user}
                         (do 
                           (println "Getting apps for user...")
                           (response (generate-string (list-apps (user-access-token request)))))))
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
        handler/site))))

(defn -main []
  (ring/run-jetty #'app {:port 3000 :join? false}))


