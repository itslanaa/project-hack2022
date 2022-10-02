export default {
  props: {
    subLayout: {
      type: Boolean
    },
    subLayoutHasScrollingRegion: {
      type: Boolean,
      default: () => true
    },
    subLayoutDrawer: {
      type: [Object, Boolean],
      default: () => null
    },
    subLayoutDrawerId: {
      type: String,
      default: () => null
    },
    subLayoutDrawerAlign: {
      type: String,
      default: () => 'end'
    },
    subLayoutResponsiveWidth: {
      type: String,
      default: () => '992px'
    }
  }
}