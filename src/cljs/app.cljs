(ns app
  (:require [domina :refer [by-class by-id append! nodes sel attr destroy-children!]]
            [domina.css :refer [sel]]
            [ajax.core :refer [GET edn-response-format edn-request-format json-request-format json-response-format]]
            [reagent.core :as reagent]))

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
    [:li {:class (str "list-group-item")
          :on-click handle-click!}
      [:span {:class (str 
                      (if (k @selections) "glyphicon glyphicon-ok selected"))}]
     v]))

(defn selection-list [id label items]
  (let [selections (->> items (map (fn [[k]] [k false])) (into {}) reagent/atom)]
    (fn []
      [:div.row.container
       [:div.col-md5
        [:div.row
         (for [[k v] items]
           (do
             [list-item id k v selections]
             )
           )]]])))

(defn home [heroku-apps]
  [:div 
   [selection-list :heroku-apps "My Heroku Apps" 
    heroku-apps]
   [:p]
   [:button {:type "Submit"
              :class "btn btn-primary"
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

(defn fetch-apps []
  (GET "/api/apps" 
       :response-format :json
       :format (json-request-format)
       :handler fetch-apps-handler
       :error-handler error-handler
       :keywords? true))

(defn ^:export init []
  (do
    (.log js/console (str "Hello from cljs!!"))
    (reagent/render-component [loading-message]
                              (.getElementById js/document "apps-list"))
    (fetch-apps)))

