<template>
  <luma-ui-chart-line-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiChartLinePage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiChartLinePage
    },
    extends: Page,
    data() {
      return {
        title: 'Line Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Line Chart'
      }
    }
  }
</script>
