export default {
  props: {
    hasFooter: {
      type: Boolean,
      default: () => true
    },
    footerClass: {
      type: [String, Array, Object],
      default: () => 'bg-white border-top-2'
    },
    footerContainerClass: {
      type: [String, Array, Object],
      default: () => null
    },
    footerBrand: {
      type: String,
      default: () => 'Brand'
    },
    footerLogo: {
      type: [String, Boolean],
      default: () => null
    },
    footerCopyrightYear: {
      type: [String, Number, Boolean],
      default: () => null
    },
    footerCopyrightText: {
      type: [String, Boolean],
      default: () => null
    },
    footerDescriptionText: {
      type: [String, Boolean],
      default: () => null
    }
  }
}