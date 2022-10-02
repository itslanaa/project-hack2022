<template>
  <luma-edit-account-page 
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {LumaEditAccountPage} from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaEditAccountPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Basic Information')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Basic Information')
      }
    }
  }
</script>
