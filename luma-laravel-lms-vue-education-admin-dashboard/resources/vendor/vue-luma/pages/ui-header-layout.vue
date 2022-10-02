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
  import {FmvHeaderLayout} from 'fmv-layout'

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
          component: 'FmvHeaderLayout',
          componentOptions: FmvHeaderLayout,
          slots: [
            { name: 'default', description: 'The page content.' },
            { name: 'header', description: 'Place the navbar or other content into the header.' }
          ],
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-header-layout header-fixed>
              <div slot="header">
                // header content (i.e. navbar)
              </div>

              // page content
            </fmv-header-layout>
          </template>
          
          <script>
          import {FmvHeaderLayout} from 'fmv-layout'

          export default {
            components: {
              FmvHeaderLayout
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
