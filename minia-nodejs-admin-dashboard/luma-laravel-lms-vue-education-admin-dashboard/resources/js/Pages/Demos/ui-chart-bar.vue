<template>
  <luma-ui-chart-bar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiChartBarPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiChartBarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Bar Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Bar Chart'
      }
    }
  }
</script>
