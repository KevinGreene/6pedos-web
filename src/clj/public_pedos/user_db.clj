(ns public-pedos.user-db
  (:require [somnium.congomongo :as cm]
            [environ.core :refer [env]]))

(def conn
  (cm/make-connection
   (env :db-name)
   :host (env :db-host)
   :port (env :db-port)))

(defn authenticate-mongo [] (cm/authenticate conn (env :db-user) (env :db-password)))

(defn user-heroku-apps [user-info]
  (cm/fetch-one :user_heroku_apps :where {:heroku-id (:heroku-id user-info)}))

(defn save-user-info! [user-info]
  (cm/insert! :user_heroku_apps user-info))

(defn user-api-key [user-info]
  (:app-id (user-heroku-apps user-info)))

(defn set-connection! []
  (cm/set-connection! conn))
