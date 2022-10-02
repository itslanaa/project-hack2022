export default {
  computed: {
    mainDrawerAlign() {
      try {
        return this.$store.getters.settings[`${this.layout}::mainDrawer`].align
      // eslint-disable-next-line no-empty
      } catch(e) {}
    },
    mainDrawerSidebar() {
      try {
        return this.$store.getters.settings[`${this.layout}::mainDrawer`].sidebar
      // eslint-disable-next-line no-empty
      } catch(e) {}
    }
  }
}
