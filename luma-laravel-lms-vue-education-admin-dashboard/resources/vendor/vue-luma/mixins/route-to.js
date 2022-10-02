export default {
  methods: {
    routeTo(route) {
      let layout
      try {
        layout = this.$route.params.layout
      } catch (e) {}

      if (!layout) {
        try {
          layout = this.$store.getters.settings.layout.layout
        } catch(e) {}
      }

      const params = layout ? {layout} : {}

      const routeTo = typeof route === 'string' 
        ? {
            name: route,
            params
          }
        : Object.assign({}, route, {params})

      try {
        return this.localeRoute !== undefined 
          ? this.localeRoute(routeTo) 
          : this.$router.resolve(routeTo).route
        } catch(e) {
          return route
        }
    },
  }
}