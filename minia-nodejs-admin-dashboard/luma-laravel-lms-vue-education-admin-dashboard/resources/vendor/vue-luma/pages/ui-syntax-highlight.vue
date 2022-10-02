<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <fmv-highlight
        :code="code"
        class="card card-body bg-dark measure-lead-max" />

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
          component: 'FmvHighlight',
          componentOptions: FmvHighlight,
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-highlight :code="code" />
          </template>
          
          <script>
          import 'fmv-highlight/dist/fmv-highlight.css'
          import {FmvHighlight} from 'fmv-highlight'

          export default {
            components: {
              FmvHighlight
            },
            data() {
              return {
                code: \`
                // code to Syntax Highlight
                \`
              }
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
