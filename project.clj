(defproject public-pedos "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371" :scope "provided"]
                 [ring "1.3.1"]
                 [compojure "1.2.0"]
                 [ring/ring-json "0.1.2"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [enlive "1.1.5"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [environ "1.0.0"]
                 [cheshire "5.3.1"]
                 [com.cemerick/friend "0.2.0" :exclusions [ring/ring-core]]
                 [friend-oauth2 "0.1.1" :exclusions [org.apache.httpcomponents/httpcore]]
                 [domina "1.0.3-SNAPSHOT"]
                 [cljs-ajax "0.3.3"]
                 [cljs-http "0.1.2" :exclusions [org.clojure/clojure]]
                 [ring-middleware-format "0.4.0"]]

  
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.7"]
            [lein-environ "1.0.0"]]

  :cljsbuild {:builds
              {:dev {:source-paths ["src/cljs"]
                     :compiler
                     {:pretty-print true :output-to "resources/public/js/app.js"}}
               :prod {:source-paths ["src/cljs"]
                      :compiler
                      {:optimizations :advanced
                       :output-to "resources/public/js/app.js"}}}}

  :min-lein-version "2.5.0"
    
  :resource-paths ["resources"]

  :target-path "target/$s"

  :main ^:skip-aot public-pedos.core

  :profiles {:uberjar {:aot :all}})

