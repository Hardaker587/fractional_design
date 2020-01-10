export default [
  {
    path: "/pages/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--pages-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/templates/Pages.vue")
  },
  {
    path: "/portfolio/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--portfolio-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/templates/Portfolio.vue")
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
    path: "/portfolio-page/",
    component: () => import(/* webpackChunkName: "page--src--pages--portfolio-page-vue" */ "/Users/gavin/Documents/GitHub/fractional_design/src/pages/portfolioPage.vue")
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

