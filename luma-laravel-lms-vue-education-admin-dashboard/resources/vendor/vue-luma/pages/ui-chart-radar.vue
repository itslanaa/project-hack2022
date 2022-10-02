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
        title="Radar"
        description="A radar chart provides a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets."
        no-body>

        <fmv-radar-chart
          :data="data"
          suffix=" points"
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
  
  import {
    FmvRadarChart, 
    settings 
  } from 'fmv-charts'

  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      FmvRadarChart,
      FmvHighlight,
      DocsPage,
      DocsCard
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvRadarChart',
          componentOptions: FmvRadarChart,
          nav: ['usage']
        },
        data: {
          labels: [
            'JavaScript',
            'HTML',
            'Flinto',
            'Vue.js',
            'Sketch',
            'Priciple',
            'CSS',
            'Angular'
          ],
          datasets: [
            {
              data: [30, 35, 33, 32, 31, 30, 28, 36],
              pointHoverBorderColor: settings.colors.success[400],
              pointHoverBackgroundColor: settings.colors.white,
              borderJoinStyle: 'bevel',
              lineTension: 0.1
            }
          ]
        },
        code: {
          template: `
            <template>
              <fmv-radar-chart
                :data="data"
                :options="options"
                suffix=" points"
                class="chart" />
            </template>
          `,
          script: `
            <script>
              import {FmvRadarChart, settings} from 'fmv-charts'

              export default {
                components: {
                  FmvRadarChart
                },
                data() {
                  return {
                    data: {
                      labels: [
                        'JavaScript',
                        'HTML',
                        'Flinto',
                        'Vue.js',
                        'Sketch',
                        'Priciple',
                        'CSS',
                        'Angular'
                      ],
                      datasets: [
                        {
                          data: [30, 35, 33, 32, 31, 30, 28, 36],
                          pointHoverBorderColor: settings.colors.success[400],
                          pointHoverBackgroundColor: settings.colors.white,
                          borderJoinStyle: 'bevel',
                          lineTension: 0.1
                        }
                      ]
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
