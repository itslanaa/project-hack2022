<script>
  import layoutConfigMixin from '@/Mixins/layout-config'
  import {routeToMixin} from 'vue-luma'

  export default {
    mixins: [
      routeToMixin,
      layoutConfigMixin
    ], 
    head() {
      return {
        title: `${this.$t(this.title)} - ${this.$store.state.brand}`
      }
    },
    props: {
      layoutProps: {
        type: Object
      }
    },
    data() {
      return {
        title: null
      }
    },
    computed: {
      breadcrumb() {
        return [{
          text: this.$t('Home'),
          to: this.routes.home
        }, {
          text: this.$t(this.title),
          active: true
        }]
      },
      headerClass() {
        return null
      },
      headerEffects() {
        return 'waterfall'
      },
      headerImage() {
        return null
      },
      headerContentClass() {
        return null
      },
      headerCondenses() {
        return false
      },
      headerContentComponent() {
        return null
      },
      headerContentComponentProps() {
        return null
      },
      guest() {
        return false
      },
      subLayout() {
        return false
      },
      subLayoutDrawer() {
        return false
      },
      subLayoutDrawerId() {
        return 'sub-layout-drawer'
      },
      subLayoutDrawerAlign() {
        return 'end'
      }
    },
    created() {
      this.emitOptions()
      this.$root.$on('logout', this.logout)

      if (this.$page.props.auth) {
        this.$store.dispatch('auth/getUser').catch(() => {})
      }
    },
    methods: {
      onLogout() {
        window.location = '/'
      },
      logout() {
        this.$store.dispatch('auth/logout')
          .then(this.onLogout)
          .catch(this.onLogout)
      },
      emitOptions() {
        const options = [
          'guest',
          'subLayout',
          'subLayoutDrawerId',
          'subLayoutDrawerAlign',
          'subLayoutDrawer',
          'subLayoutHasScrollingRegion',
          'headerClass',
          'headerEffects',
          'headerImage',
          'headerContentClass',
          'headerCondenses',
          'headerContentComponent',
          'headerContentComponentProps'
        ]

        options.map(option => {
          if (this[option] !== undefined) {
            this.$watch(option, {
              immediate: true,
              handler: () => this.$root.$emit(`luma::${option}`, this[option])
            })
          }
        })
      }
    }
  }
</script>
