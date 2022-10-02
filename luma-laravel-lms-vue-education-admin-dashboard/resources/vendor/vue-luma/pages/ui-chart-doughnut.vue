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
        title="Doughnut"
        description="Excellent at showing the relational proportions between data."
        no-body>

        <fmv-doughnut-chart
          :data="data"
          suffix="%"
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
    FmvDoughnutChart,
    settings
  } from 'fmv-charts'

  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      FmvDoughnutChart,
      FmvHighlight,
      DocsPage,
      DocsCard
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvDoughnutChart',
          componentOptions: FmvDoughnutChart,
          nav: ['usage']
        },
        data: {
          labels: ['Desktop', 'Tablet', 'Mobile'],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: [
                settings.colors.primary[500],
                settings.colors.success[300],
                settings.colors.success[100]
              ],
              hoverBorderColor:
                'dark' == settings.charts.colorScheme
                  ? settings.colors.gray[800]
                  : settings.colors.white
            }
          ]
        },
        code: {
          template: `
            <template>
              <fmv-doughnut-chart
                :data="data"
                :options="options"
                suffix="%"
                class="chart" />
            </template>
          `,
          script: `
            <script>
              import {FmvDoughnutChart} from 'fmv-charts'

              export default {
                components: {
                  FmvDoughnutChart
                },
                data() {
                  return {
                    data: {
                      labels: ['Desktop', 'Tablet', 'Mobile'],
                      datasets: [{
                        data: [60, 25, 15],
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
