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
                 [selmer "0.7.9"]
                 [weasel "0.4.2"]
                 [cljs-ajax "0.3.4"]
                 [lib-noir "0.9.5"]
                 [org.clojure/core.cache "0.6.4"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [ring-middleware-format "0.4.0" :exclusions [hiccup org.eclipse.jetty/jetty-http org.eclipse.jetty/jetty-continuation]]]

  
  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-ring "0.8.13"]
            [lein-environ "1.0.0"]
            [lein-asset-minifier "0.2.2"]
            [lein-figwheel "0.2.1-SNAPSHOT"]]

  :cljsbuild {:builds
              {:app {:source-paths ["src/cljs"]
                     :compiler {:preamble ["reagent/react.js"]
                                :pretty-print true 
                                :output-to "resources/public/js/app.js"
                                :output-dir "resources/public/js/out"
                                :optimizations :none}}}}

  :ring {:handler public-pedos.core/app}

  :min-lein-version "2.5.0"
    
  :resource-paths ["resources"]

  :target-path "target/$s"
  
  :clean-targets ^{:protect false} ["resources/public/js"]

  ;;:main ^:skip-aot public-pedos.core
  :main public-pedos.core
;;  :profiles {:uberjar {:aot :all}}
  :profiles {:dev {:repl-options {:init-ns public-pedos.core
                                  :nreple-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :dependencies [[ring-mock "0.1.5"]
                                  [pjstadig/humane-test-output "0.6.0"]]

                   :plugins [[lein-figwheel "0.2.1-SNAPSHOT"]]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :figwheel {:http-server-root "public"
                              :server-root 3449
                              :css-dirs ["resources/public/css"]
                              :ring-handler public-pedos.core/app}

                   :env {:dev? true}

                   :cljsbuild {:builds  {:app {:source-paths ["env/dev/cljs"]
                                                 :compiler {:source-map true}}}}}})

