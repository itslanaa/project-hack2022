<template>
  <luma-student-my-quizzes-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaStudentMyQuizzesPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaStudentMyQuizzesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('My Quizzes')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('My Quizzes')
      }
    }
  }
</script>
