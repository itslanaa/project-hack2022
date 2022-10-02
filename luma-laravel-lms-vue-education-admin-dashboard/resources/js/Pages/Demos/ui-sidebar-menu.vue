<template>
  <luma-ui-sidebar-menu-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaUiSidebarMenuPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaUiSidebarMenuPage
    },
    extends: Page,
    data() {
      return {
        title: 'Sidebar Menu'
      }
    }
  }
</script>
