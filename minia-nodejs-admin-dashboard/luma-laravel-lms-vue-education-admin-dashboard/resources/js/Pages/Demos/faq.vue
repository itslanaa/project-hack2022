<template>
  <luma-faq-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaFaqPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaFaqPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('FAQ')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('FAQ')
      }
    }
  }
</script>
