<template>
  <luma-help-center-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaHelpCenterPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaHelpCenterPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Help Center')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Help Center')
      }
    }
  }
</script>
