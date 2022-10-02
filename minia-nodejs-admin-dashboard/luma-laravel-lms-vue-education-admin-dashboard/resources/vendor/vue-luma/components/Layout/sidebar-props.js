export default {
  props: {
    sidebarType: {
      type: String,
      default: () => 'dark-pickled-bluewood'
    },
    sidebarVariant: {
      type: String,
      default: () => null
    },
    sidebarBrand: {
      type: [String, Boolean],
      default: () => 'Brand'
    },
    sidebarSearch: {
      type: Boolean,
      default: () => true
    },
    sidebarSearchFormClass: {
      type: [String, Array, Object],
      default: () => null
    },
    sidebarBrandClass: {
      type: [String, Array, Object],
      default: () => null
    },
    sidebarMenu: {
      type: [Object, Array],
      default: () => null
    }
  }
}