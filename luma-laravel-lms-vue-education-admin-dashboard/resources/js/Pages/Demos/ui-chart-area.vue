<template>
  <luma-ui-chart-area-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiChartAreaPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiChartAreaPage
    },
    extends: Page,
    data() {
      return {
        title: 'Area Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Area Chart'
      }
    }
  }
</script>
