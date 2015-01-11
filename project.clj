(defproject public-pedos "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2657" :scope "provided"]
                 [ring "1.3.1" :exclusions [org.eclipse.jetty/jetty-http org.eclipse.jetty/jetty-continuation]]
                 [compojure "1.3.1"]
                 [ring/ring-json "0.1.2"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [congomongo "0.4.4"]
                 [enlive "1.1.5"]
                 [figwheel "0.1.6-SNAPSHOT"]
                 [environ "1.0.0"]
                 [cheshire "5.3.1"]
                 [com.cemerick/friend "0.2.0" :exclusions [ring/ring-core]]
                 [friend-oauth2 "0.1.1" :exclusions [commons-logging org.apache.httpcomponents/httpcore]]
                 [domina "1.0.3-SNAPSHOT"]
                 [prismatic/dommy "1.0.0"]
                 [reagent "0.5.0-alpha"]
                 [reagent-utils "0.1.2"]
                 [reagent-forms "0.3.9"]
                 [secretary "1.2.1"]
                 [com.cemerick/piggieback "0.1.4"]
                 [weasel "0.4.2"]
                 [cljs-ajax "0.3.3"]
                 [cljs-http "0.1.2" :exclusions [org.clojure/clojure]]
                 [lib-noir "0.9.5"]
                 [org.clojure/core.cache "0.6.4"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [ring-middleware-format "0.4.0" :exclusions [hiccup org.eclipse.jetty/jetty-http org.eclipse.jetty/jetty-continuation]]]

  :repl-options {:init-ns reagent-example.repl}
  
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.7"]
            [lein-environ "1.0.0"]]

  :cljsbuild {:builds
              {:dev {:source-paths ["src/cljs"]
                     :compiler
                     {:preamble ["reagent/react.js"]
                      :pretty-print true :output-to "resources/public/js/app.js"}}
               :prod {:source-paths ["src/cljs"]
                      :compiler
                      {:optimizations :advanced
                       :output-to "resources/public/js/app.js"}}}}

  :min-lein-version "2.5.0"
    
  :resource-paths ["resources"]

  :target-path "target/$s"

  :main ^:skip-aot public-pedos.core

  :profiles {:uberjar {:aot :all}})

