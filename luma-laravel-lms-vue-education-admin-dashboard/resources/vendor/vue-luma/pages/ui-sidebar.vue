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
  import {FmvSidebar} from 'fmv-layout'

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
          component: 'FmvSidebar',
          componentOptions: FmvSidebar,
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-drawer :align="align">
              <fmv-sidebar
                :align="align"
                type="dark"
                variant="bg-dark">
                // sidebar content
              </fmv-sidebar>
            </fmv-drawer>
          </template>
          
          <script>
          import {FmvDrawer, FmvSidebar} from 'fmv-layout'

          export default {
            components: {
              FmvDrawer,
              FmvSidebar
            },
            data() {
              return {
                align: 'start'
              }
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
