(ns app
  (:require [domina :refer [by-class nodes sel attr]]
            [domina.css :refer [sel]]
            [ajax.core :refer [GET]]))

(defn fetch-apps-handler [response]
  (.log js/console (str response)))

(defn fetch-apps []
  (GET "/api/apps" {:handler fetch-apps-handler}))

(defn ^:export init []
  (do
  (.log js/console (str "Hello from cljs!!"))
   (fetch-apps)))

