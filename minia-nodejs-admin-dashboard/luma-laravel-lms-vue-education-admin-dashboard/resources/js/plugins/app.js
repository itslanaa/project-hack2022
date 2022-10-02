import Vue from 'vue'

import NoSsr from 'vue-no-ssr'
Vue.component('NoSsr', NoSsr)

import Blank from '@/Layouts/Blank'
import App from '@/Layouts/App'
import Sticky from '@/Layouts/Sticky'
import Boxed from '@/Layouts/Boxed'
import Fixed from '@/Layouts/Fixed'
import Dynamic from '@/Layouts/Dynamic'

Vue.component('Blank', Blank)
Vue.component('App', App)
Vue.component('Sticky', Sticky)
Vue.component('Boxed', Boxed)
Vue.component('Fixed', Fixed)
Vue.component('Dynamic', Dynamic)