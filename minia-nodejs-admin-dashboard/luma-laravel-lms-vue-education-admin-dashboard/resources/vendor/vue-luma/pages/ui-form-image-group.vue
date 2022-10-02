<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <docs-card
        id="usage" 
        title="Image Radio Inputs"
        no-body>
        <template slot="description">
          Radio input controls using images.
        </template>

        <b-form class="flex">
          <b-form-group
            label="Layout"
            label-for="layout01-default"
            label-class="form-label">
            <bv-form-image-group
              :options="options"
              v-model="form.layout.basic"
              required
              name="layout01"
              class="d-inline-flex" />
          </b-form-group>

          <b-button 
            type="submit" 
            variant="primary">
            Submit
          </b-button>
        </b-form>

        <template slot="before-footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <fmv-highlight
                :code="code.basic.template"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <fmv-highlight
                :code="code.basic.script"
                lang="js"
                class="bg-dark" />
            </b-tab>
          </b-tabs>
        </template>
      </docs-card>

      <docs-card
        id="validation" 
        title="Validation"
        no-body>
        <template slot="description">
          Form image groups support form validation states just like other input types.
        </template>

        <b-form
          novalidate
          validated 
          class="flex">
          <b-form-group
            :state="state"
            invalid-feedback="Please select an image."
            valid-feedback="Looks good!"
            label="Layout"
            label-for="layout02-default"
            label-class="form-label">
            <bv-form-image-group
              :options="options"
              v-model="form.layout.validation" 
              name="layout02"
              class="d-inline-flex" />
          </b-form-group>
        </b-form>

        <template slot="before-footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <fmv-highlight
                :code="code.validation.template"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <fmv-highlight
                :code="code.validation.script"
                lang="js"
                class="bg-dark" />
            </b-tab>
          </b-tabs>
        </template>
      </docs-card>

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   DocsCard,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import DocsCard from '~/components/Docs/Card.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  
  import {BvFormImageGroup} from 'bv-form-image-group'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      DocsPage,
      DocsCard,
      BvFormImageGroup,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'BvFormImageGroup',
          componentOptions: BvFormImageGroup,
          nav: ['usage', 'validation']
        },
        form: {
          layout: {
            basic: 'default',
            validation: null
          },
        },
        options: [
          {
            text: 'Layout Fluid',
            value: 'default',
            image: '/images/app-layout.png'
          },
          {
            text: 'Layout Fixed',
            value: 'fixed',
            image: '/images/fixed-layout.png'
          }
        ],
        code: {
          basic: {
            template: `
              <b-form-group
                label="Layout"
                label-for="layout01-default">
                <bv-form-image-group
                  :options="options"
                  v-model="layout"
                  required
                  name="layout01"
                  class="d-inline-flex" />
              </b-form-group>
            `,
            script: `
              import {BvFormImageGroup} from 'bv-form-image-group'

              export default {
                components: {
                  BvFormImageGroup
                },
                data() {
                  return {
                    layout: 'default',
                    options: [{
                      text: 'Layout Fluid',
                      value: 'default',
                      image: '/images/app-layout.png'
                    }, {
                      text: 'Layout Fixed',
                      value: 'fixed',
                      image: '/images/fixed-layout.png'
                    }]
                  }
                }
              }
            `
          },
          validation: {
            template: `
              <b-form-group
                :state="state" 
                label="Layout"
                label-for="layout02-default"
                invalid-feedback="Please select an image."
                valid-feedback="Looks good!">
                <bv-form-image-group
                  :options="options"
                  v-model="layout"
                  name="layout02"
                  class="d-inline-flex" />
              </b-form-group>
            `,
            script: `
              import {BvFormImageGroup} from 'bv-form-image-group'

              export default {
                data() {
                  return {
                    layout: null,
                    options: [{
                      text: 'Layout Fluid',
                      value: 'default',
                      image: '/images/navigation-side.svg'
                    }, {
                      text: 'Layout Fixed',
                      value: 'fixed',
                      image: '/images/navigation-top.svg'
                    }]
                  }
                },
                computed: {
                  state() {
                    return !!(this.layout && this.layout.length > 0)
                  }
                }
              }
            `
          }
        }
      }
    },
    computed: {
      state() {
        return !!(this.form.layout.validation && this.form.layout.validation.length > 0)
      }
    }
  }
</script>
