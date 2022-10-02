export default {
  props: {
    navbarContentContainerClass: {
      type: [String, Array, Object],
      default: () => 'd-flex w-100 align-items-center'
    },
    navbarBrand: {
      type: String,
      default: () => 'Brand'
    },
    navbarBrandClass: {
      type: [String, Array, Object],
      default: () => null
    },
    navbarFullSampleGuestMode: {
      type: Boolean
    },
    navbarSearch: {
      type: Boolean
    }
  }
}