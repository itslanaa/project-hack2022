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
  import {FmvDrawerLayout} from 'fmv-layout'

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
          component: 'FmvDrawerLayout',
          componentOptions: FmvDrawerLayout,
          slots: [
            { name: 'default', description: 'The page content.' },
            { name: 'drawer', description: 'Place the sidebar or other content into the drawer.' }
          ],
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-drawer-layout 
              align="start"
              responsive-width="992px"
              push>
              
              <div slot="drawer">
                // drawer content
              </div>

              // page content
            </fmv-drawer-layout>
          </template>
          
          <script>
          import {FmvDrawerLayout} from 'fmv-layout'

          export default {
            components: {
              FmvDrawerLayout
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
