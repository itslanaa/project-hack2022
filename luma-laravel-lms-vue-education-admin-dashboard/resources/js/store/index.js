import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const ssr = process.env.VUE_APP_SSR === 'true'
const plugins = ssr 
  ? []
  : [createPersistedState({
      paths: ['auth']
    })] 

export const state = () => ({
  brand: 'Luma'
})

export const getters = {
  settings: state => state.settings.state
}

import settings from './settings'
import layoutConfig from './layoutConfig'
import sidebarConfig from './sidebarConfig'
import sidebarMenuConfig from './sidebarMenuConfig'
import navbarConfig from './navbarConfig'
import auth from './auth'

export const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations: {},
    actions: {},
    modules: {
      settings,
      layoutConfig,
      sidebarConfig,
      sidebarMenuConfig,
      navbarConfig,
      auth
    },
    plugins
  })
}

const store = createStore()
export default store
