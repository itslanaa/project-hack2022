<template>
  <luma-ui-chart-radar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-charts'
  
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiChartRadarPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiChartRadarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Radar Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Radar Chart'
      }
    }
  }
</script>
