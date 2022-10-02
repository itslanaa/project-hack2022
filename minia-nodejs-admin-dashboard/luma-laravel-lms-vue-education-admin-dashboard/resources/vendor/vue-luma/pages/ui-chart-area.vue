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
        title="Area"
        description="An area chart or area graph displays graphically quantitative data. It is based on the line chart."
        no-body>

        <fmv-area-chart
          :data="data"
          prefix="$"
          suffix="k"
          class="chart" />

        <template slot="before-footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <fmv-highlight
                :code="code.template"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <fmv-highlight
                :code="code.script"
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

  import {FmvAreaChart} from 'fmv-charts'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      FmvAreaChart,
      FmvHighlight,
      DocsPage,
      DocsCard
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvAreaChart',
          componentOptions: FmvAreaChart,
          nav: ['usage']
        },
        data: {
          // eslint-disable-next-line
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Performance',
              data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
            }
          ]
        },
        code: {
          template: `
            <template>
              <fmv-area-chart
                :data="data"
                :options="options"
                prefix="$"
                suffix="k"
                class="chart" />
            </template>
          `,
          script: `
            <script>
              import {FmvAreaChart} from 'fmv-charts'

              export default {
                components: {
                  FmvAreaChart
                },
                data() {
                  return {
                    data: {
                      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                      datasets: [{
                        label: 'Performance',
                        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
                      }]
                    }
                  }
                }
              }
            <\/script>
          `
        }
      }
    }
  }
</script>
