(function(){
  'use strict';

  window['moment-range'].extendMoment(moment);

  var Earnings = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }]
      }
    }, options)

    var data = []
    var customers = []

    // Create a date range for the last 7 days
    var start = moment().subtract(7, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      const views = Math.round(Math.floor(Math.random() * 300) + 10)
      data.push({
        y: views,
        x: moment.toDate()
      })
      customers.push({
        y: Math.round(views * 0.5),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Customers",
        data: customers
      }, {
        label: "Earnings",
        data
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Progress = function(id, value, total, type = 'doughnut', options = {}) {
    options = Chart.helpers.merge({
      cutoutPercentage: 85,
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: false
    }, options)

    var data = {
      datasets: [{
        data: [value, total - value],
        backgroundColor: [],
        borderWidth: 0
      }]
    }

    Charts.create(id, type, options, data)
  }

  ///////////////////
  // Create Charts //
  ///////////////////
  
  Progress('#invoicesProgressChart', 11.34, 27)
  Earnings('#earningsChart')

})()