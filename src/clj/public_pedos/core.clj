(ns public-pedos.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as ring]
            [ring.middleware.json :as middleware]
            [ring.middleware.session :as sessions]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.util.response :refer [resource-response response]]
            [compojure.handler :as handler]
            [noir.response :refer [edn]]
            [cheshire.core :refer :all]
            [cemerick.friend :as friend]
            [friend-oauth2.workflow :as oauth2]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [clj-http.client :as http-client]
            [clojure.set :refer :all]
            [public-pedos.user-db :as user-db]
            [public-pedos.auth-config :as auth-config]))


(defn credential-fn [token]
  {:identity token :roles #{::user}})

(defn new-uuid [] (.toString (java.util.UUID/randomUUID)))

(defn user-access-token [request]
  (get-in (friend/current-authentication request) [:identity :access-token]))

(defn set-authorization-header! [request]
  (assoc-in request [:headers "Authorization"] (str "Bearer " (user-access-token request))))

(defn list-apps [token]
  (http-client/get "https://api.heroku.com/apps" {:headers {"Authorization" (str "Bearer " token)} :as :json}))

(defn all-apps [request]
  (:body (list-apps (user-access-token request))))

(defn- fetch-user-heroku-info [token]
  (http-client/get "https://api.heroku.com/account" {:headers {"Authorization" (str "Bearer " token)} :as :json}))

(defn user-heroku-info [token]
  (rename-keys 
   (select-keys 
    (->> token
         (fetch-user-heroku-info)
         (:body))
    [:id :email])
   {:id :heroku-id}))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/auth/callback" request
       (do
         (resource-response "secured.html" {:root "public"})))
  (GET "/secured" request
       (friend/authorize #{::user}
                         (let [token (user-access-token request)
                               heroku-info (user-heroku-info token)
                               user-info (user-db/user-heroku-apps heroku-info)]
                           (do
                           (if (nil? user-info)
                             (user-db/save-user-info! (assoc heroku-info :app-id (new-uuid))))
                           (resource-response "secured.html" {:root "public"}))
                        )))
  (GET "/api/apps" request
       (friend/authorize #{::user}
                         (do 
                           (edn (:body (list-apps (user-access-token request)))))))
  (GET "/api/key", request
       (friend/authorize #{::user}
                         (let [token (user-access-token request)
                               heroku-info (user-heroku-info token)
                               user-info (user-db/user-heroku-apps heroku-info)]
                           (if (not (nil? user-info))
                             (edn (user-db/user-api-key user-info))
                             (edn nil)))))
  (friend/logout (ANY "/logout" request (ring.util.response/redirect "/")))
  (route/resources "/"))

(def app
  (sessions/wrap-session
   (routes
    (-> app-routes
        (friend/authenticate
         {:allow-anon? true
          :workflows [(oauth2/workflow 
                       {:client-config auth-config/client-config
                        :uri-config auth-config/uri-config
                        :credential-fn credential-fn})]})
        handler/site
        (wrap-restful-format)))))

(defn -main []
  (cheshire.generate/add-encoder org.bson.types.ObjectId cheshire.generate/encode-str)
  (user-db/set-connection!)
  (user-db/authenticate-mongo)
  (ring/run-jetty #'app {:port 3000 :join? false}))


