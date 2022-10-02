<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <card
        id="usage"
        title="Custom Scrollbar"
        footer-class="bg-dark"
        subtitle="Minimalistic custom scrollbar."
        no-body>
        <b-card-body class="bg-light">
          <fmv-perfect-scrollbar 
            id="ps"
            :wheel-propagation="false"
            style="height: 185px;">
            <h5>Scrollable content</h5>
            <p
              v-for="item in [1,2,3,4,5,6,7,8,9,10]"
              :key="`ps-text-${item}`"
              class="text-black-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eligendi a illo? Laudantium eligendi explicabo inventore cumque reiciendis magnam mollitia, officia perspiciatis similique consectetur molestias odit itaque distinctio aliquam quasi.</p>
          </fmv-perfect-scrollbar>
        </b-card-body>

        <fmv-highlight
          slot="footer" 
          :code="code" />
      </card>

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   Card,
  //   DocsPage,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import Card from '~/components/Ui/Card.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'
  import {FmvPerfectScrollbar} from 'fmv-layout'

  export default {
    components: {
      Card,
      DocsPage,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvPerfectScrollbar',
          componentOptions: FmvPerfectScrollbar,
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-perfect-scrollbar 
              :wheel-propagation="false"
              style="height: 185px;">
              
              // scrollable content

            </fmv-perfect-scrollbar>
          </template>
          
          <script>
          import {FmvPerfectScrollbar} from 'fmv-layout'

          export default {
            components: {
              FmvPerfectScrollbar
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
