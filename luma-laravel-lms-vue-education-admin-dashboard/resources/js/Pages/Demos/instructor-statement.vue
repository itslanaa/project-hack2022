<template>
  <luma-instructor-statement-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaInstructorStatementPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaInstructorStatementPage
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Statement')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Statement')
      }
    }
  }
</script>
