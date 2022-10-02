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
        title="Merge Group"
        no-body>
        <template slot="description">
          A slightly modified version of the default input groups that always keeps icons as a part of the form control. Also works with validation.
        </template>

        <b-form class="flex">
          <b-form-group
            :description="input && input.length > 0 ? `The model value is: ${input}` : null"
            label="Prepend"
            label-for="prepend01"
            label-class="form-label">
            <fmv-input-group-merge
              v-model="input"
              name="prepend01"
              placeholder="Input group prepended"
              required
              prepend>
              <md-icon>remove_red_eye</md-icon>
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            label="Append"
            label-for="append01"
            label-class="form-label">
            <fmv-input-group-merge
              name="append01"
              placeholder="Input group appended"
              required
              append>
              <md-icon>lock_outline</md-icon>
            </fmv-input-group-merge>
          </b-form-group>
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
          Input Group Merge supports validation just like other input types.
        </template>

        <b-form class="flex">
          <b-form-group
            :state="statePrepend"
            :description="validationPrepend && validationPrepend.length > 0 ? `The model value is: ${validationPrepend}` : null"
            label="Prepend"
            label-for="validation01"
            label-class="form-label"
            invalid-feedback="Please type a value.">
            <fmv-input-group-merge
              v-model="validationPrepend"
              :state="statePrepend"
              name="validation01"
              placeholder="Input group prepended"
              required
              prepend>
              <md-icon>remove_red_eye</md-icon>
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :state="stateAppend"
            label="Append"
            label-for="validation02"
            label-class="form-label"
            invalid-feedback="Please type a value."
            valid-feedback="All good.">
            <fmv-input-group-merge
              v-model="validationAppend"
              :state="stateAppend"
              name="validation02"
              placeholder="Input group appended"
              required
              append>
              <md-icon>lock_outline</md-icon>
            </fmv-input-group-merge>
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
  //   MdIcon,
  //   DocsPage,
  //   DocsCard,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import DocsCard from '~/components/Docs/Card.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  
  import {FmvInputGroupMerge} from 'fmv-input-group-merge'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      MdIcon,
      DocsPage,
      DocsCard,
      FmvInputGroupMerge,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        input: 'Hello World',
        validationPrepend: 'Hello World',
        validationAppend: null,
        meta: {
          component: 'FmvInputGroupMerge',
          componentOptions: FmvInputGroupMerge,
          nav: ['usage', 'validation']
        },
        code: {
          basic: {
            template: `
              <b-form-group
                :description="input && input.length > 0 ? \`The model value is: \${input}\` : null"
                label="Prepend"
                label-for="prepend01"
                label-class="form-label">
                <fmv-input-group-merge
                  v-model="input"
                  name="prepend01"
                  placeholder="Input group prepended"
                  required
                  prepend>
                  <md-icon>remove_red_eye</md-icon>
                </fmv-input-group-merge>
              </b-form-group>

              <b-form-group
                label="Append"
                label-for="append01"
                label-class="form-label">
                <fmv-input-group-merge
                  name="append01"
                  placeholder="Input group appended"
                  required
                  append>
                  <md-icon>lock_outline</md-icon>
                </fmv-input-group-merge>
              </b-form-group>
            `,
            script: `
              import {FmvInputGroupMerge} from 'fmv-input-group-merge'

              export default {
                components: {
                  FmvInputGroupMerge
                },
                data() {
                  return {
                    input: null
                  }
                }
              }
            `
          },
          validation: {
            template: `
              <b-form-group
                :state="statePrepend"
                :description="validationPrepend && validationPrepend.length > 0 ? \`The model value is: \${validationPrepend}\` : null"
                label="Prepend"
                label-for="validation01"
                label-class="form-label"
                invalid-feedback="Please type a value.">
                <fmv-input-group-merge
                  v-model="validationPrepend"
                  :state="statePrepend"
                  name="validation01"
                  placeholder="Input group prepended"
                  required
                  prepend>
                  <md-icon>remove_red_eye</md-icon>
                </fmv-input-group-merge>
              </b-form-group>

              <b-form-group
                :state="stateAppend"
                label="Append"
                label-for="validation02"
                label-class="form-label"
                invalid-feedback="Please type a value."
                valid-feedback="All good.">
                <fmv-input-group-merge
                  v-model="validationAppend"
                  :state="stateAppend"
                  name="validation02"
                  placeholder="Input group appended"
                  required
                  append>
                  <md-icon>lock_outline</md-icon>
                </fmv-input-group-merge>
              </b-form-group>
            `,
            script: `
              import {FmvInputGroupMerge} from 'fmv-input-group-merge'

              export default {
                components: {
                  FmvInputGroupMerge
                },
                data() {
                  return {
                    validationPrepend: 'Hello World',
                    validationAppend: null
                  }
                },
                computed: {
                  statePrepend() {
                    return !!(this.validationPrepend && this.validationPrepend.length > 0)
                  },
                  stateAppend() {
                    return !!(this.validationAppend && this.validationAppend.length > 0)
                  }
                }
              }
            `
          }
        }
      }
    },
    computed: {
      statePrepend() {
        return !!(this.validationPrepend && this.validationPrepend.length > 0)
      },
      stateAppend() {
        return !!(this.validationAppend && this.validationAppend.length > 0)
      }
    }
  }
</script>
