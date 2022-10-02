<template>
  <luma-billing-history-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaBillingHistoryPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaBillingHistoryPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Payment History')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Payment History')
      }
    }
  }
</script>
