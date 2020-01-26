import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
    Vue.use(BootstrapVue)
    Vue.use(BootstrapVueIcons)
    Vue.use(VueGlide)
    head.bodyAttrs = { class: 'bg-light' }
}