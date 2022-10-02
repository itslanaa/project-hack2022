<template>
  <luma-student-dashboard-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import '@/plugins/fmv-charts'

  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaStudentDashboardPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaStudentDashboardPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Dashboard')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Dashboard')
      }
    }
  }
</script>
