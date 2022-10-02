<template>
  <luma-blog-post-page 
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaBlogPostPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaBlogPostPage,
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Blog Post')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Blog Post')
      }
    }
  }
</script>
