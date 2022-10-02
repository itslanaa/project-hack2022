export default {
  computed: {
    navbarConfigKey() {
      try {
        return this.$store.getters.settings[`${this.layout}::mainNavbar`].navbar
      // eslint-disable-next-line no-empty
      } catch(e) {}
    },
    navbarConfig() {
      if (this.navbarConfigKey) {
        return this.$store.state.navbarConfig[this.navbarConfigKey]
      }
    },
    navbarType() {
      try {
        return this.navbarConfigValue('type')
      // eslint-disable-next-line no-empty
      } catch(e) {}
    },
    navbarVariant() {
      try {
        return this.navbarConfigValue('variant')
      // eslint-disable-next-line no-empty
      } catch(e) {}
    }
  },
  methods: {
    navbarConfigValue(key) {
      if (this.navbarConfig) {
        return this.navbarConfig[key]
      }
    }
  }
}
