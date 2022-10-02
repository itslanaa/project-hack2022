<template>
  <luma-student-my-paths-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaStudentMyPathsPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaStudentMyPathsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('My Paths')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('My Paths')
      }
    }
  }
</script>
