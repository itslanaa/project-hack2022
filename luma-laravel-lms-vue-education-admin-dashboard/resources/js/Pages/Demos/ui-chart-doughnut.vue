<template>
  <luma-ui-chart-doughnut-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiChartDoughnutPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiChartDoughnutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Doughnut Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Doughnut Chart'
      }
    }
  }
</script>
