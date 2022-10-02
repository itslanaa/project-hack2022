<template>
  <card
    :header-btn="true" 
    :title="$t('Earnings')"
    :subtitle="$t('Last 7 Days')"
    :header-btn-route="routeTo(routes.instructorEarnings)">
    <md-icon slot="header-btn-title">trending_up</md-icon>

    <component 
      :is="'fmv-bar-chart'"
      :data="data"
      :options="options"
      prefix="$"
      suffix="k"
      class="chart"
      style="height: 200px;" />
  </card>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import Moment from 'moment'
  import { extendMoment } from 'moment-range'
  const moment = extendMoment(Moment)

  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'

  import {FmvBarChart} from 'fmv-charts'

  export default {
    components: {
      MdIcon,
      Card,
      FmvBarChart
    },
    mixins: [routeTo],
    data() {
      return {
        options: {
          barRoundness: 1.2,
          title: {
            display: true,
            fontSize: 12,
            fontColor: 'rgba(54, 76, 102, 0.54)',
            position: 'top',
            text: 'GENERATED INCOME'
          },
          scales: {
            yAxes: [{
              ticks: {
                maxTicksLimit: 4
              }
            }],
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
                  unit: 'day',
                  displayFormats: {
                    day: 'D/MM'
                  },
                  maxTicksLimit: 7
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
          .subtract(7, 'days')
          .format('YYYY-MM-DD') // 7 days ago
        var end = moment().format('YYYY-MM-DD') // today
        var range = moment.range(start, end)

        // Create the earnings graph data
        // Iterate the date range and assign a random ($) earnings value for each day

        for (let moment of range.by('day')) {
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
