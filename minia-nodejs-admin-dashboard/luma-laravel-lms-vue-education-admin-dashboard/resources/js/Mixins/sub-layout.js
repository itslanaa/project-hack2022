export default {
  data() {
    return {
      subLayout: false,
      subLayoutHasScrollingRegion: true,
      subLayoutDrawer: false,
      subLayoutDrawerId: 'sub-layout-drawer',
      subLayoutDrawerAlign: 'end'
    }
  },
  created() {
    this.$root.$on('luma::subLayout', subLayout => this.subLayout = subLayout)
    this.$root.$on('luma::subLayoutHasScrollingRegion', subLayoutHasScrollingRegion => this.subLayoutHasScrollingRegion = subLayoutHasScrollingRegion)
    this.$root.$on('luma::subLayoutDrawer', subLayoutDrawer => this.subLayoutDrawer = subLayoutDrawer)
    this.$root.$on('luma::subLayoutDrawerId', subLayoutDrawerId => this.subLayoutDrawerId = subLayoutDrawerId)
    this.$root.$on('luma::subLayoutDrawerAlign', subLayoutDrawerAlign => this.subLayoutDrawerAlign = subLayoutDrawerAlign)
  }
}