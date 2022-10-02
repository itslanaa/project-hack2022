<template>
  <div>
    <component 
      :is="layout"
      v-if="layout_">
      <slot />
    </component>
  </div>
</template>

<script>
  // import { mediaQuery } from 'material-design-kit'
  // import { watch, unwatch } from 'watch-object'

  const { name, version } = require('@/../../package.json')
  import { Session } from 'fm-app-settings'
  import dot from 'dot-object'
  
  export default {
    props: ['routeLayout'],
    head() {
      return {
        title: this.$store.state && this.$store.state.brand,
        htmlAttrs: {
          dir: `${this.$store.state && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
        }
      }
    },
    watch: {
      'routeLayout': {
        immediate: true,
        handler() {
          this.$nextTick(this.setLayout)
        }
      }
    },
    data() {
      return {
        session: null,

        // prevent loading the default layout 
        // until the route was loaded 
        // and the layout has changed in the store
        layout_: null
      }
    },
    computed: {
      layout() {
        return this.layout_ ? this.$store.getters.settings.layout.layout : null
      }
    },
    methods: {
      setSettings(layout) {
        const payload = {
          layout: {
            layout
          }
        }
        this.$store.dispatch('settings/setSettings', payload)
        this.layout_ = layout
      },
      setLayout() {
        let layout = this.$store.getters.settings.layout.layout

        /** Override from route layout param */

        if (this.routeLayout) {
          layout = this.routeLayout
        }

        /** Set Layout */

        this.setSettings(layout)

        /** Save layout to localStorage */

        try {
          let memory = this.session.memory('settings')
          if (memory) {
            dot.object(memory)
          }

          if (!memory || (memory && memory.layout.layout !== layout)) {
            this.session.save('settings', dot.dot(this.$store.getters.settings))
          }
        // eslint-disable-next-line no-empty
        } catch (e) {}
      }
    },
    created() {
      this.session = new Session(`${name}-${version}`)
    }
  }
</script>
