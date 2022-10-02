export default {
  computed: {
    layoutConfig() {
      return this.$store.state.layoutConfig[this.layout]
    },
    containerClass() {
      return this.layoutConfig.containerClass
    },
    navbarContainerClass() {
      const classes = { 'p-0': this.layout === 'fixed' }
      
      let containerClass = this.layoutConfig.navbarContainerClass
      if (!containerClass) {
        containerClass = this.layoutConfig.containerClass
      }

      classes[containerClass] = true
      return classes
    }
  }
}