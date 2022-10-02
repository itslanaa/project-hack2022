require('./bootstrap')

import Vue from 'vue'

/**
 * Global Ziggy route helper as a component method
 */

Vue.mixin({ methods: { route } })

/**
 * Inertia
 */

import { 
  App as InertiaApp, 
  plugin as InertiaPlugin 
} from '@inertiajs/inertia-vue'

Vue.use(InertiaPlugin)

/**
 * Laravel Jetstream
 */

// import { InertiaForm } from 'laravel-jetstream'
// Vue.use(InertiaForm)

/**
 * hack for https://github.com/laravel/jetstream-js/issues/7
 */

// let inertiaForm = Vue.prototype.$inertia.form;
// Vue.prototype.$inertia.form = (data = {}, options = {}) => {
//   return inertiaForm(data, options)
//     .withPage(() => Vue.prototype.$page.props)
// }

// import PortalVue from 'portal-vue'
// Vue.use(PortalVue)

/**
 * Inertia Progress Indicator
 */

import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({
  delay: 0,
  color: '#5567FF'
})

/**
 * Application Plugins
 */

import '@/plugins/vue-meta'
import '@/plugins/bootstrap-vue'
import '@/plugins/vue-luma'
import '@/plugins/fmv-layout'
import '@/plugins/fmv-highlight'
import '@/plugins/fmv-avatar'
import '@/plugins/vue-luma'
import '@/plugins/app'

/**
 * Vuex Store
 */

import store from '@/store'

/**
 * i18n
 */

import i18n from '@/i18n'

/**
 * Hack to get bootstrap-vue links to work with inertia-link
 * https://github.com/bootstrap-vue/bootstrap-vue/issues/5759#issuecomment-694279196
 */

import RouterLink from '@/Components/RouterLink'
Vue.component('RouterLink', RouterLink)
Vue.prototype.$router = 'fake'

/**
 * Global Helpers
 */

import {mapGetters} from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ]),
    ...mapGetters('settings', [
      'routes',
      'layout'
    ])
  }
})

/**
 * Create Application
 */

const app = document.getElementById('app')

new Vue({
  store,
  i18n,
  head() {
    return {
      title: this.$store.state && this.$store.state.brand,
      htmlAttrs: {
        dir: `${this.$store.state && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
      }
    }
  },
  render: (h) =>
    h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name =>
          import(
            /* webpackChunkName: "pages/" */ `./Pages/${name}`
          ).then(module => module.default)
      },
    }),
}).$mount(app)
