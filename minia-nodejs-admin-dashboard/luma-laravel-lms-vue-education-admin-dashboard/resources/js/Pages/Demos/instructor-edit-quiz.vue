<template>
  <luma-instructor-edit-quiz-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import '@/plugins/vue-quill-editor'

  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaInstructorEditQuizPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaInstructorEditQuizPage
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Edit Quiz')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Edit Quiz')
      }
    }
  }
</script>
