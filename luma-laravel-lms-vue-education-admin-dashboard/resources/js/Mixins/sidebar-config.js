export default {
  computed: {
    sidebarConfig() {
      if (this.sidebarConfigKey) {
        return this.$store.state.sidebarConfig[this.sidebarConfigKey]
      }
    },
    sidebarType() {
      try {
        return this.sidebarConfigValue('type')
      // eslint-disable-next-line no-empty
      } catch(e) {}
    },
    sidebarVariant() {
      try {
        return this.sidebarConfigValue('variant')
      // eslint-disable-next-line no-empty
      } catch(e) {}
    }
  },
  methods: {
    sidebarConfigValue(key) {
      if (this.sidebarConfig) {
        return this.sidebarConfig[key]
      }
    }
  }
}
