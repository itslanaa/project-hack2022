<template>
  <luma-ui-input-group-merge-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/fmv-input-group-merge'

  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiInputGroupMergePage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiInputGroupMergePage
    },
    extends: Page,
    data() {
      return {
        title: 'Input Group Merge'
      }
    }
  }
</script>
