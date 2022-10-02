export default {
  data() {
    return {
      popoverContainer: null,
      isRTL: false,
      isRTLIntv: null
    }
  },
  watch: {
    isRTL: {
      handler() {
        if (this.open && ! this.isMobile) {
          let popoverContainer = this.popoverContainer
          this.popoverContainer = null
          this.$nextTick(() => {
            this.popoverContainer = popoverContainer
            setTimeout(() => this.$root.$emit('bv::show::popover', this.id), 200)
          })
        }
      }
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      if (this.$el) {
        this.isRTLIntv = setInterval(() => this.isRTL = window && window.getComputedStyle(this.$el).direction === 'rtl', 100)
      }
    })
  },
  beforeDestroy() {
    clearInterval(this.isRTLIntv)
  },
  mounted() {
    this.$root.$on('bv::popover::show', () => {
      this.$root.$emit('bv::hide::popover')
    })

    this.$nextTick(() => {
      const isDrawerLayout = document.querySelector('.mdk-drawer-layout__content')
      const isHeaderLayout = document.querySelector('.mdk-header-layout__content')
      // const isSubLayout = document.querySelector('.mdk-drawer-layout__content .mdk-drawer-layout__content')
      // const isHeaderSubLayout = document.querySelector('.mdk-header-layout__content .mdk-drawer-layout__content')

      let container = null
      container = isDrawerLayout ? isDrawerLayout.getAttribute('id') : container
      container = isHeaderLayout ? isHeaderLayout.getAttribute('id') : container
      // container = !!isSubLayout ? isSubLayout.getAttribute('id') : container
      // container = !!isHeaderSubLayout ? isHeaderSubLayout.getAttribute('id') : container

      this.popoverContainer = container

      if (this.open && ! this.isMobile) {
        setTimeout(() => this.$root.$emit('bv::show::popover', this.id), 200)
      }
    })
  }
}