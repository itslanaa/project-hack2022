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
        title="Bar"
        description="A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."
        no-body>

        <fmv-bar-chart
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

  import {FmvBarChart} from 'fmv-charts'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      FmvBarChart,
      FmvHighlight,
      DocsPage,
      DocsCard
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FmvBarChart',
          componentOptions: FmvBarChart,
          nav: ['usage']
        },
        data: {
          // eslint-disable-next-line
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
              barThickness: 10
            }
          ]
        },
        code: {
          template: `
            <template>
              <fmv-bar-chart
                :data="data"
                :options="options"
                prefix="$"
                suffix="k"
                class="chart" />
            </template>
          `,
          script: `
            <script>
              import {FmvBarChart} from 'fmv-charts'

              export default {
                components: {
                  FmvBarChart
                },
                data() {
                  return {
                    data: {
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      datasets: [
                        {
                          label: 'Sales',
                          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                          barThickness: 10
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
