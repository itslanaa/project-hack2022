<template>
  <luma-instructor-quizzes-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaInstructorQuizzesPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaInstructorQuizzesPage,
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Manage Quizzes')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Manage Quizzes')
      }
    }
  }
</script>
