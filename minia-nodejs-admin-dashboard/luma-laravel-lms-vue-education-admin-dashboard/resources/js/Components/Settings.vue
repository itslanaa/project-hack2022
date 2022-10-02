<template>
  <div>
    <fm-app-settings-button
      :align="localButtonAlign" />
    <fm-app-settings-drawer
      :options="options" 
      :drawer-align="localDrawerAlign"
      :namespace="namespace" 
      sidebar-type="light"
      sidebar-variant="border-0" />
  </div>
</template>

<style src="fm-app-settings/dist/fm-app-settings.css" />

<style scoped>
.app-settings-button {
  top: 132px;
}
</style>

<script>
  import {
    FmAppSettingsDrawer,
    FmAppSettingsButton,
    listenOnRootMixin
  } from 'fm-app-settings'

  import settingsConfig from '@/Mixins/settings-config'
  import dot from 'dot-object'
  import queryString from 'query-string'
  const { name, version } = require('@/../../package.json')

  export default {
    props: ['routeLayout'],
    components: {
      FmAppSettingsButton,
      FmAppSettingsDrawer
    },
    mixins: [listenOnRootMixin, settingsConfig],
    data() {
      return {
        settings: {}
      }
    },
    computed: {
      namespace() {
        return `${name}-${version}`
      }
    },
    watch: {
      settings: {
        deep: true,
        handler(value) {
          return this.$root.$emit('fm:settings:update', value)
        }
      }
    },
    beforeMount() {
      this.listenOnRoot('fm:settings:state', this.onUpdate)
      window.addEventListener('hashchange', () => this.onHashChange())
    },
    beforeDestroy() {
      window.removeEventListener('hashchange', () => this.onHashChange())
    },
    methods: {
      // #fm:layout.rtl=true&layout.layout=fixed
      onHashChange() {
        if (location.hash.indexOf('#fm:') !== 0) {
          return
        }

        var config = queryString.parse(location.hash.replace(/^(#fm:)/, ''))
        window.location.hash = ''

        Object.keys(config).forEach(k => {
          if (['true', 'false'].includes(config[k])) {
            config[k] = config[k] === 'true'
          }
          this.$set(this.settings, k, config[k])
        })

        this.setSettings()

        Object.keys(config).forEach(k => {
          if (['true', 'false'].includes(config[k])) {
            config[k] = config[k] === 'true'
          }
          this.apply(k, config[k])
        })
      },
      apply(key, value) {
        if (key === 'layout.layout') {
          if (value !== this.routeLayout) {
            let routeTo = route(route().current(), { layout: value }).url()
            this.$inertia.get(routeTo, {}, { replace: true })
          }
        }
      },
      onUpdate(settings) {
        Object.keys(settings).map(key => {
          this.$set(this.settings, key, settings[key])
        })
        
        this.setSettings()

        Object.keys(settings).map(key => {
          this.apply(key, settings[key])
        })

        this.onHashChange()
      },
      setSettings() {
        const unflatten = JSON.parse(JSON.stringify(this.settings))
        dot.object(unflatten)

        this.$store.dispatch('settings/setSettings', unflatten)
      }
    }
  }
</script>
