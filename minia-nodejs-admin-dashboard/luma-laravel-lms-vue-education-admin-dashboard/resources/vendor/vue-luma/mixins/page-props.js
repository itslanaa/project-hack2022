import layoutConfigMixin from './layout-config'

export default {
  mixins: [layoutConfigMixin],
  props: {
    title: {
      type: String,
      required: true
    },
    breadcrumb: {
      type: Array,
      default: () => [{
        text: 'Home',
        to: '/'
      }, {
        text: 'Page Title',
        active: true
      }]
    }
  }
}