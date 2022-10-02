<template>
  <luma-teachers-page
    :title="title"
    :container-class="containerClass"
    :results-heading-sidebar-toggle="resultsHeadingSidebarToggle" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {
    LumaTeachersPage,
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
      LumaTeachersPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Browse Teachers')
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
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Browse Teachers')
      }
    }
  }
</script>
