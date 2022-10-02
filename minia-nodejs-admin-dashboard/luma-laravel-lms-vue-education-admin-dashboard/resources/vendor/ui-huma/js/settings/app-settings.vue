<template>
  <div>
    <fm-app-settings-button 
      :align="localButtonAlign"
      variant="dark"></fm-app-settings-button>
    <fm-app-settings-drawer
      namespace="huma-v1.0.0" 
      :options="computedOptions" 
      :drawer-align="localDrawerAlign"
      :sidebar-type="localSidebarType"
      :sidebar-variant="localSidebarVariant"></fm-app-settings-drawer> 
  </div>
</template>

<style scoped>
.app-settings-button {
  top: 200px !important;
}
</style>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import queryString from 'query-string'

Vue.use(BootstrapVue)

import 'bootstrap-vue/dist/bootstrap-vue.css'

import { 
  FmAppSettingsButton, 
  FmAppSettingsDrawer,
  listenOnRootMixin,
  sidebarProps,
  prefixProps
} from 'fm-app-settings'

import { FmvToggle } from 'fmv-layout'

Vue.directive('FmvToggle', FmvToggle)

import localAppSettingsMixin from './local-app-settings-mixin'

export default {
  components: {
    FmAppSettingsButton,
    FmAppSettingsDrawer
  },
  mixins: [
    listenOnRootMixin,
    localAppSettingsMixin
  ],
  props: {
    ...prefixProps(sidebarProps, 'sidebar')
  },
  data() {
    return {
      settings: {},
      overrides: {}
    }
  },
  computed: {
    localSidebarType() {
      return !!this.settings['theme.darkMode'] ? 'dark' : 'light'
    },
    localSidebarVariant() {
      return !!this.settings['theme.darkMode'] ? 'bg-dark' : 'bg-body'
    }
  },
  created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate)
    window.addEventListener('hashchange', () => this.onHashChange())
  },
  mounted() {
    this.onHashChange()
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', () => this.onHashChange())
  },
  watch: {
    settings: {
      deep: true,
      handler(value) {
        this.$root.$emit('fm:settings:update', value)
      }
    }
  },
  methods: {
    // #fm:rtl=false&theme.theme=light
    onHashChange() {
      if (location.hash.indexOf('#fm:') !== 0) {
        return
      }

      var config = queryString.parse(location.hash.replace(/^(#fm:)/, ''))
      Object.keys(config).forEach(k => {
        if (['true', 'false'].includes(config[k])) {
          config[k] = config[k] === 'true'
        }
        this.$set(this.settings, k, config[k])
      })
    },
    onUpdate(settings) {
      Object.keys(settings).map(key => {
        this.$set(this.settings, key, settings[key])
      })

      Object.keys(settings).map(key => {
        let config = this.config[key]
        if (config !== undefined) {
          this.applyOverrides(config[settings[key]])

          if (this.overrides[key] !== undefined) {
            this.$set(this.settings, key, this.overrides[key])
          }
        }

        this.applyConfig(key, settings[key])
      })
    },
    applyConfig(configKey, value) {
      let config = this.config[configKey]

      if (config === undefined) {
        return
      }

      if (typeof config === 'function') {
        return config.call(this, value)
      }

      this.applyElements(config[value])
    },
    applyOverrides(config) {
      if (config === undefined) {
        return
      }

      for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
          var element = config[selector]
          if (typeof element === 'function') {
            const result = element.call(this)
            if (!!result) {
              this.$set(this.overrides, selector, result)
            }
          }
        }
      }
    },
    applyElements(config) {
      if (config === undefined) {
        return
      }

      for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
          var element = config[selector]

          if (typeof element === 'function') {
            element.call(this)
            continue;
          }

          var nodes = document.querySelectorAll(selector)
          ;[].forEach.call(nodes, function(node) {
            if (!node) {
              return
            }
            if (element.addClass) {
              element.addClass.forEach(className => {
                node.classList.add(className)
              })
            }
            if (element.removeClass) {
              element.removeClass.forEach(className => {
                node.classList.remove(className)
              })
            }
            if (element.src) {
              node.src = element.src
            }
            if (element.setAttribute) {
              element.setAttribute.forEach(({name, value}) => {
                node.setAttribute(name, value)
              })
            }
            if (element.removeAttribute) {
              element.removeAttribute.forEach(name => {
                node.removeAttribute(name)
              })
            }
          })
        }
      }
    }
  }
}
</script>
