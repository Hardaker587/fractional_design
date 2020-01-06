export default [
  {
    path: "/sitePages/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--pages-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/templates/Pages.vue")
  },
  {
    path: "/blog/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/templates/BlogPost.vue")
  },
  {
    path: "/thank-you/",
    component: () => import(/* webpackChunkName: "page--src--pages--thank-you-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/thank-you.vue")
  },
  {
    path: "/projects/",
    component: () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/projects.vue")
  },
  {
    path: "/blogarchive/",
    component: () => import(/* webpackChunkName: "page--src--pages--blogarchive-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/blogarchive.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/404.vue")
  }
]

