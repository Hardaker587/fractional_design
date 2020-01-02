import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}

module.exports = {
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-155217022-1'
      }
    }
  ]
}