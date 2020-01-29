import plugin_gridsome_plugin_google_analytics_5 from "/Users/gavin/Documents/GitHub/fractional_design/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_9 from "/Users/gavin/Documents/GitHub/fractional_design/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_google_analytics_5,
    options: {"id":"UA-155217022-1"}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_9,
    options: {"pathPrefix":"","collections":[{"typeName":"BlogPost","indexName":"BlogPost","fields":["title","slug","date"]}],"searchFields":["title"],"flexsearch":{"profile":"default"}}
  }
]
