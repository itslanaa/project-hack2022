<template>
  <luma-student-paths-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :results-heading-sidebar-toggle="resultsHeadingSidebarToggle" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {
    LumaStudentPathsPage,
    LibraryDrawer,
    LibrarySidebar
  } from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaStudentPathsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Paths')
      }
    },
    computed: {
      subLayout() {
        return this.layout === 'fixed'
      },
      subLayoutDrawer() {
        return this.layout === 'fixed' 
          ? LibrarySidebar
          : LibraryDrawer
      },
      subLayoutDrawerId() {
        return 'library-drawer'
      },
      resultsHeadingSidebarToggle() {
        return this.layout === 'fixed' ? 'mobile' : true
      }
    }
  }
</script>
