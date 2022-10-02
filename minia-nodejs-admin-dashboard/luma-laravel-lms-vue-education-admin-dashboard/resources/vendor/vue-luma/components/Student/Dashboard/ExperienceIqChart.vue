<template>
  <b-card
    header-class="d-flex align-items-center border-0">
    <template slot="header">
      <div class="h2 mb-0 mr-3">432</div>
      <div class="flex">
        <p class="card-title">Experience IQ</p>
        <p class="card-subtitle text-50">{{ $t('4 days streak this week') }}</p>
      </div>
      <md-icon class="text-muted ml-2">trending_up</md-icon>
    </template>

    <component 
      :is="'fmv-line-chart'"
      :data="data"
      :options="options"
      :suffix="` ${$t('points')}`"
      class="chart"
      style="height: 112px;" />
  </b-card>
</template>

<script>
  import { settings } from 'fmv-charts'
  import Moment from 'moment'
  import { extendMoment } from 'moment-range'
  const moment = extendMoment(Moment)
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvLineChart} from 'fmv-charts'

  export default {
    components: {
      MdIcon,
      FmvLineChart
    },
    data() {
      return {
        options: {
          elements: {
            point: {
              pointStyle: 'circle',
              radius: 4,
              hoverRadius: 5,
              backgroundColor: settings.colors.white,
              borderColor: settings.colors.primary[500],
              borderWidth: 2
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                type: 'time',
                distribution: 'series',
                time: {
                  unit: 'day',
                  stepSize: 1,
                  autoSkip: false,
                  displayFormats: {
                    day: 'dd'
                  }
                }
              }
            ]
          }
        }
      }
    },
    computed: {
      data() {
        var earnings = []

        // Create a date range for the last 7 days
        var start = moment()
          .subtract(6, 'days')
          .format('YYYY-MM-DD') // 7 days ago
        var end = moment().format('YYYY-MM-DD') // today
        var range = moment.range(start, end)

        // Create the earnings graph data
        // Iterate the date range and assign a random ($) earnings value for each day

        for (let moment of range.by('day')) {
          earnings.push({
            y: Math.floor(Math.random() * 200) + 15,
            x: moment.toDate()
          })
        }

        return {
          datasets: [
            {
              data: earnings,
              pointHoverBorderColor: settings.colors.success[400],
              pointHoverBackgroundColor: settings.colors.white
            }
          ]
        }
      }
    }
  }
</script>
