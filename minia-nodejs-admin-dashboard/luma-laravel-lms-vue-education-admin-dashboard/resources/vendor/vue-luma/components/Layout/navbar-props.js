export default {
  props: {
    navbarClass: {
      type: [String, Array, Object],
      default: () => null
    },
    navbarToggleClass: {
      type: [String, Array, Object],
      default: () => null
    },
    navbarType: {
      type: String,
      default: () => 'light'
    },
    navbarVariant: {
      type: String,
      default: () => 'body border-bottom-2'
    },
    navbarContainerClass: {
      type: [String, Array, Object],
      default: () => 'd-flex w-100 align-items-center'
    }
  }
}