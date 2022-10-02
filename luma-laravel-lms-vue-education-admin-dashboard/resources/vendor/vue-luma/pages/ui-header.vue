<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <fmv-highlight
        id="usage"
        :code="code"
        class="card card-body bg-dark" />

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'
  import {FmvHeader} from 'fmv-layout'

  export default {
    components: {
      DocsPage,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvHeader',
          componentOptions: FmvHeader,
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-header fixed>
              // header content
            </fmv-header>
          </template>
          
          <script>
          import {FmvHeader} from 'fmv-layout'

          export default {
            components: {
              FmvHeader
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
