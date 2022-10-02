<template>
  <luma-instructor-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaInstructorCoursesPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaInstructorCoursesPage
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Manage Courses')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Manage Courses')
      }
    }
  }
</script>
