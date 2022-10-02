<template>
  <luma-student-my-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaStudentMyCoursesPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaStudentMyCoursesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('My Courses')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('My Courses')
      }
    }
  }
</script>
