<template>
  <luma-ui-form-image-group-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import '@/plugins/bv-form-image-group'

  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiFormImageGroupPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiFormImageGroupPage
    },
    extends: Page,
    data() {
      return {
        title: 'Form Image Group'
      }
    }
  }
</script>
