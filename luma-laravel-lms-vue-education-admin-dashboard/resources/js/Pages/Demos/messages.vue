<template>
  <luma-messages-page
    :title="title"
    :container-class="containerClass"
    :navbar-container-class="navbarContainerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {
    LumaMessagesPage,
    MessagesSidebar
  } from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaMessagesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Messages')
      }
    },
    computed: {
      subLayout() {
        return true
      },
      subLayoutHasScrollingRegion() {
        return false
      },
      subLayoutDrawer() {
        return MessagesSidebar
      },
      subLayoutDrawerAlign() {
        return 'end'
      },
      subLayoutDrawerId() {
        return 'messages-drawer'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Messages')
      }
    }
  }
</script>
