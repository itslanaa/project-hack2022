<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <card
        id="soft_background"
        title="Soft background"
        footer-class="bg-dark">
        <p class="text-black-70">For a soft background, use one of the contextual variants i.e. <code>success</code>.</p>

        <b-alert
          v-for="(item, index) in softAlerts"
          :key="item.variant"
          :variant="item.variant"
          :class="{ 'mb-0': index === softAlerts.length - 1 }"
          show
          v-html="item.html" />

        <fmv-highlight 
          slot="footer" 
          :code="codeSoft" />
      </card>

      <card
        id="dismissible"
        title="Dismissible"
        footer-class="p-0">

        <b-alert 
          :show="showDismissibleAlert"
          variant="danger"
          dismissible
          @dismissed="showDismissibleAlert=false">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </b-alert>

        <b-alert 
          :show="dismissCountDown"
          dismissible
          variant="success"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged">
          <p class="mb-1"><strong>Well done!</strong> You successfully read this important alert message. This alert will dismiss after {{ dismissCountDown }} seconds...</p>
          <b-progress
            :max="dismissSecs"
            :value="dismissCountDown" 
            variant="success"
            height="4px" />
        </b-alert>

        <div class="button-list">
          <b-btn 
            variant="white"
            @click="showAlert">
            Show alert with count-down timer
          </b-btn>

          <b-btn 
            variant="white"
            @click="showDismissibleAlert=true">
            Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
          </b-btn>
        </div>

        <b-tabs
          slot="footer" 
          nav-class="nav-tabs-card"
          content-class="card-footer bg-dark">
          <b-tab
            title="Template">
            <fmv-highlight
              :code="codeDismissible.template"
              class="bg-dark" />
          </b-tab>
          <b-tab
            title="Script">
            <fmv-highlight
              :code="codeDismissible.script"
              lang="js"
              class="bg-dark" />
          </b-tab>
        </b-tabs>
      </card>

      <card
        id="strong_background"
        title="Strong background"
        footer-class="bg-dark">
        <p class="text-black-70">For a stronger background color use the <code>.bg-*</code> and <code>.text-white.border-0</code> classes.</p>

        <b-alert
          v-for="(item, index) in softAlerts"
          :key="item.variant"
          :variant="item.variant"
          :class="strongAlertClass(item, index)"
          class="text-white border-0"
          show  
          v-html="item.html" />

        <fmv-highlight 
          slot="footer" 
          :code="codeStrong" />
      </card>

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   Card,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import Card from '~/components/Ui/Card.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'

  import {FmvHighlight} from 'fmv-highlight'
  import {BAlert} from 'bootstrap-vue'

  export default {
    components: {
      DocsPage,
      Card,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'BAlert',
          componentOptions: BAlert,
          nav: ['soft_background', 'dismissible', 'strong_background']
        },
        codeSoft: `
          <b-alert
            show 
            variant="success">
            <strong>Well done!</strong> You successfully read this important alert message.
          </b-alert>
        `,
        codeStrong: `
          <b-alert
            show 
            variant="success"
            class="text-white border-0 bg-success">
            <strong>Well done!</strong> You successfully read this important alert message.
          </b-alert>
        `,
        codeDismissible: {
          template: `
            <div>
              <b-alert 
                :show="showDismissibleAlert"
                variant="danger"
                dismissible
                @dismissed="showDismissibleAlert=false">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </b-alert>

              <b-alert 
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
                <p class="mb-1"><strong>Well done!</strong> You successfully read this important alert message. This alert will dismiss after {{ dismissCountDown }} seconds...</p>
                <b-progress
                  :max="dismissSecs"
                  :value="dismissCountDown" 
                  variant="success"
                  height="4px" />
              </b-alert>

              <b-btn 
                variant="white"
                @click="showAlert">
                Show alert with count-down timer
              </b-btn>

              <b-btn 
                variant="white"
                @click="showDismissibleAlert=true">
                Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
              </b-btn>
            </div>
          `,
          script: `
            export default {
              data () {
                return {
                  dismissSecs: 10,
                  dismissCountDown: 0,
                  showDismissibleAlert: false
                }
              },
              methods: {
                countDownChanged (dismissCountDown) {
                  this.dismissCountDown = dismissCountDown
                },
                showAlert () {
                  this.dismissCountDown = this.dismissSecs
                }
              }
            }
          `
        },
        softAlerts: [
          {
            variant: 'success',
            html: `<strong>Well done!</strong> You successfully read this important alert message.`
          },
          {
            variant: 'danger',
            html: `<strong>Oh snap!</strong> Change a few things up and try submitting again.`
          },
          {
            variant: 'warning',
            html: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
          },
          {
            variant: 'info',
            html: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
          }
        ],
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      strongAlertClass(alert, index) {
        const classNames = { 'mb-0': index === this.softAlerts.length - 1 }
        classNames[`bg-${alert.variant}`] = true
        return classNames
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>
