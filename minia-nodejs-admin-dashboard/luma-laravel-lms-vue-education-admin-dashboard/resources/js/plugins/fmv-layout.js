import Vue from 'vue'

import {
  FmvDrawer,
  FmvSidebar,
  FmvSidebarMenu,
  FmvDrawerLayout,
  FmvHeader,
  FmvHeaderLayout,
  FmvPerfectScrollbar,
  FmvToggle
} from 'fmv-layout'

import 'fmv-layout/dist/fmv-layout.css'

Vue.component('FmvDrawer', FmvDrawer)
Vue.component('FmvSidebar', FmvSidebar)
Vue.component('FmvSidebarMenu', FmvSidebarMenu)
Vue.component('FmvDrawerLayout', FmvDrawerLayout)
Vue.component('FmvHeader', FmvHeader)
Vue.component('FmvHeaderLayout', FmvHeaderLayout)
Vue.component('FmvPerfectScrollbar', FmvPerfectScrollbar)
Vue.directive('FmvToggle', FmvToggle)