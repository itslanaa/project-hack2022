<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <b-card
        id="card_attached"
        no-body>

        <b-tabs 
          nav-class="nav-tabs-card"
          content-class="card-body">
          <b-tab
            title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequatur porro molestias repudiandae a laboriosam ipsum cum architecto accusamus. Mollitia ratione officiis tenetur, vero voluptate atque aperiam deserunt ut eius.
          </b-tab>
          <b-tab
            title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum veniam accusantium voluptatibus adipisci maxime nobis ea possimus rerum quos quae nostrum, consequuntur magnam omnis mollitia unde in, aut ad.
          </b-tab>
          <b-tab
            title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ad, laborum atque minus? Tempora nihil, explicabo optio eveniet. Deserunt est unde eius perspiciatis, minus sequi earum repudiandae eum, ex aut!
          </b-tab>
        </b-tabs>
      </b-card>

      <fmv-highlight
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
  import {BTabs} from 'bootstrap-vue'

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
          component: 'BTabs',
          componentOptions: BTabs,
          nav: ['card_attached']
        },
        code: `
          <b-card no-body>
            <b-tabs 
              nav-class="nav-tabs-card"
              content-class="card-body">
              <b-tab title="First">
                // First tab content
              </b-tab>
              <b-tab title="Second">
                // Second tab content
              </b-tab>
              <b-tab title="Third">
                // Third tab content
              </b-tab>
            </b-tabs>
          </b-card>
        `
      }
    }
  }
</script>
