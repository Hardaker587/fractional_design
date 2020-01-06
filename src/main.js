import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import carousel from 'vue-owl-carousel'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('carousel', carousel)
    Vue.use(BootstrapVue)
}
