<template>
  <luma-discussions-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaDiscussionsPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaDiscussionsPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Discussions'),
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Discussions')
      }
    }
  }
</script>
