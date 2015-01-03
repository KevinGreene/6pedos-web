(ns app
  (:require [domina :refer [by-class by-id append! nodes sel attr destroy-children!]]
            [domina.css :refer [sel]]
            [ajax.core :refer [GET edn-response-format edn-request-format]]
            [reagent.core :as reagent]))

(def api-key (atom 0))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happend: " status " " status-text)))

(def state (reagent/atom {:doc {} :saved? false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(defn list-item [id k v selections]
  (letfn [(handle-click! []
            (swap! selections update-in [k] not)
            (set-value! id (->> @selections
                                (filter second)
                                (map first))))]
    [:tr 
     [:td
      [:h2
       {:on-click handle-click!}
       [:i {:class (str 
                      (if (k @selections) "fa fa-check"))}]  
      v]
     ]]))

(defn selection-list [id label items]
  (let [selections (->> items (map (fn [[k]] [k false])) (into {}) reagent/atom)]
    (fn []
      [:div.row.container
       [:div.col-md5
        [:div.row
         [:table {:class "pure-table"}
          [:thead
           [:tr
            [:td "My Heroku Apps"]]]
          [:tbody 
           (for [[k v] items]
             (do
               [list-item id k v selections]))]]]]])))

(defn home [heroku-apps]
  [:div 
   [selection-list :heroku-apps "My Heroku Apps" 
    heroku-apps]
   [:p]
   [:button {:type "Submit"
              :class "pure-button pure-button-primary"
              :onClick #(.log js/console (clj->js @state))}
    "Save"]])


(defn render-app-name [heroku-app]
  [:li [:p (:name heroku-app)]])

(defn app-names [lst]
  (map (fn [it] [(symbol (str ":" (:name it))) (str (:name it))]) lst))

(defn loading-message []
  [:div
   [:h2 "Loading"]])

(defn fetch-apps-handler [response]
  (do
    (reagent/render-component [home (app-names response)]
                              (.getElementById js/document "apps-list"))
    ))
(defn -save-api-key! [response]
  (reset! api-key response)
  (.log js/console (str "api key " (clj->js @api-key)))
  (@api-key))

(defn fetch-api-key []
  (GET "/api/key"
       :response-format :edn
       :hander -save-api-key!
       :error-handler error-handler))

(defn fetch-apps []
  (GET "/api/apps" 
       :response-format :edn
       :format (edn-request-format)
       :handler fetch-apps-handler
       :error-handler error-handler
       ))

(defn ^:export init []
  (do
    (reagent/render-component [loading-message]
                              (.getElementById js/document "apps-list"))
    (fetch-api-key)
    (fetch-apps)))

