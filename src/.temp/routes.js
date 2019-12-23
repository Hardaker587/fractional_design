export default [
  {
    path: "/blog/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Documents/GitHub/fractional_design/src/templates/BlogPost.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/GitHub/fractional_design/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Documents/GitHub/fractional_design/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/GitHub/fractional_design/node_modules/gridsome/app/pages/404.vue")
  }
]

