<template>
  <b-card>
    <component 
      :is="'fmv-bar-chart'"
      :data="data"
      :options="options"
      prefix="$"
      suffix="k"
      class="chart-canvas" />
  </b-card>
</template>

<script>
  import Moment from 'moment'
  import { extendMoment } from 'moment-range'
  const moment = extendMoment(Moment)
  import {FmvBarChart} from 'fmv-charts'

  export default {
    components: {
      FmvBarChart
    },
    data() {
      return {
        options: {
          barRoundness: 1.2,
          title: {
            display: true,
            fontSize: 12,
            fontColor: 'rgba(54, 76, 102, 0.54)',
            position: 'top',
            text: this.$t('Earnings').toUpperCase()
          },
          scales: {
            xAxes: [
              {
                offset: true,
                ticks: {
                  padding: 10
                },
                maxBarThickness: 20,
                gridLines: {
                  display: false
                },
                type: 'time',
                time: {
                  unit: 'month',
                  displayFormats: {
                    month: 'MMM'
                  },
                  maxTicksLimit: 12
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
        var start = moment().startOf('year').format('YYYY-MM-DD')
        var end = moment().endOf('year').format('YYYY-MM-DD')
        var range = moment.range(start, end)

        // Create the earnings graph data
        // Iterate the date range and assign a random ($) earnings value for each day

        for (let moment of range.by('month')) {
          earnings.push({
            y: Math.floor(Math.random() * 300) + 10,
            x: moment.toDate()
          })
        }

        return {
          datasets: [
            {
              label: 'Earnings',
              data: earnings,
              barThickness: 10
            }
          ]
        }
      }
    }
  }
</script>
