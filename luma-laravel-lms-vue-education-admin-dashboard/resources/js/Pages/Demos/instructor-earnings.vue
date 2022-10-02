<template>
  <luma-instructor-earnings-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaInstructorEarningsPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaInstructorEarningsPage
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Earnings')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Earnings')
      }
    }
  }
</script>
