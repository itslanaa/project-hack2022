<template>
  <luma-discussion-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaDiscussionPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaDiscussionPage,
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Discussion')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Discussion')
      }
    }
  }
</script>
