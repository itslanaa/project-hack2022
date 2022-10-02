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
        header-aside
        title="Card Title"
        subtitle="Card Subtitle"
        footer-class="text-50">

        <b-dropdown
          slot="aside"
          variant="flush"
          right
          no-caret>
          <template slot="button-content">
            <md-icon class="text-muted icon-24pt">more_horiz</md-icon>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit, facere temporibus nostrum alias tenetur reiciendis dolorem vitae veritatis, aspernatur nam consequuntur molestiae voluptatum reprehenderit dolorum neque veniam quidem, voluptas.</p>
        
        <b-link 
          to="/"
          exact 
          class="btn btn-primary">
          Dashboard
        </b-link>

        <span slot="footer">The card footer text.</span>
      </card>

      <fmv-highlight
        :code="code" 
        class="card bg-dark card-body" />

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   MdIcon,
  //   Card,
  //   uiPagePropsMixin
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      DocsPage,
      MdIcon,
      Card,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'card',
          componentOptions: Card,
          slots: [
            { name: 'aside', description: 'The card header aside content.' },
            { name: 'header-btn-title', description: 'The card header button text.' },
            { name: 'footer', description: 'The card footer content.' }
          ],
          nav: ['usage']
        },
        code: `
          <script>
            import {Card} from 'vue-luma'

            export default {
              components: {Card}
            }
          <\/script>

          <template>
            <card
              header-aside
              title="Card Title"
              subtitle="Card Subtitle"
              footer-class="text-50">

              <b-dropdown
                slot="aside"
                variant="flush"
                right
                no-caret>
                <template slot="button-content">
                  <md-icon class="text-muted icon-24pt">more_horiz</md-icon>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>

              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit, facere temporibus nostrum alias tenetur reiciendis dolorem vitae veritatis, aspernatur nam consequuntur molestiae voluptatum reprehenderit dolorum neque veniam quidem, voluptas.</p>
              
              <b-link 
                to="/"
                exact 
                class="btn btn-primary">
                Dashboard
              </b-link>

              <span slot="footer">The card footer text.</span>
            </card>
          </template>
        `
      }
    }
  }
</script>
