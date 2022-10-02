<template>
  <b-card
    header-class="d-flex align-items-center"
    body-class="p-24pt">
    <template slot="header">
      <div class="h2 mb-0 mr-3">116</div>
      <div class="flex">
        <p class="card-title">Angular</p>
        <p class="card-subtitle text-50">{{ $t('Best score') }}</p>
      </div>
      <b-dropdown 
        id="ddown1" 
        :text="$t('Popular Topics')"
        size="sm"
        variant="outline-secondary"
        right>
        <b-dropdown-item>{{ $t('Popular Topics') }}</b-dropdown-item>
        <b-dropdown-item>Web Design</b-dropdown-item>
      </b-dropdown>
    </template>

    <component 
      :is="'fmv-radar-chart'"
      :data="data"
      :suffix="` ${$t('points')}`"
      class="chart"
      style="height: 344px;" />
  </b-card>
</template>

<script>
  import { 
    FmvRadarChart, 
    settings 
  } from 'fmv-charts'

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
              pointHoverBackgroundColor: settings.colors.white,
              borderJoinStyle: 'bevel',
              lineTension: 0.1
            }
          ]
        }
      }
    }
  }
</script>
