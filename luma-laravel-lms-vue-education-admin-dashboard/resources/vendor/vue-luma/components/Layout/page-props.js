export default {
  data() {
    return {
      defaultBodyClass: null
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.localBodyClass
      }
    }
  },
  props: {
    bodyClass: {
      type: String,
      default: () => null
    }
  },
  computed: {
    localBodyClass() {
      const classes = []

      if (this.defaultBodyClass) {
        classes.push(this.defaultBodyClass)
      }

      if (this.subLayout) {
        classes.push('sub-layout')
      }

      if (this.bodyClass) {
        classes.push(this.bodyClass)
      }

      return classes
    },
    defaultSlotProps() {
      let props = {}
      Object.keys(this.$props).map(prop => props[prop] = this[prop])
      return props
    }
  }
}