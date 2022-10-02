(function(){
  'use strict';

  window['moment-range'].extendMoment(moment);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  var TotalSales = function(id, type = 'area', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'SALES OVER TIME'
      },
      scales: {
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function(item) {
              return item
            },
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false,
          }
        }]
      }
    }, options)

    var data = []

    // Create a date range for the last 7 days
    var start = moment().subtract(6, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      data.push({
        y: getRandomInt(2, 40),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Total Sales",
        data
      }]
    }

    Charts.create(id, type, options, data)
  }

  var TotalVisitors = function(id, type = 'roundedBar', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'VISITORS OVER TIME'
      },
      scales: {
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function(item) {
              return item
            },
          },
          offset: true,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7
          }
        }]
      }
    }, options)

    var data = []

    // Create a date range for the last 7 days
    var start = moment().subtract(6, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      data.push({
        y: getRandomInt(10, 30),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Total Visitors",
        data,
        barThickness: 20
      }]
    }

    Charts.create(id, type, options, data)
  }

  var RepeatCustomerRate = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'CUSTOMERS'
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            autoSkipPadding: 0,
            padding: 4,
            maxTicksLimit: 4,
            callback: function(item) {
              return item
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function(item) {
              return item
            },
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false,
          }
        }]
      }
    }, options)

    var firstTimeData = []
    var returningData = []

    // Create a date range for the last 7 days
    var start = moment().subtract(6, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      firstTimeData.push({
        y: getRandomInt(0, 5),
        x: moment.toDate()
      })

      returningData.push({
        y: getRandomInt(5, 10),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "First time",
        data: firstTimeData
      }, {
        label: "Returning",
        data: returningData
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Views = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      scales: {
        xAxes: [{
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
    var conversion = []

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
      conversion.push({
        y: Math.round(views * 0.1),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Conversion",
        data: conversion
      }, {
        label: "Views",
        data
      }]
    }

    Charts.create(id, type, options, data)
  }

  var TotalOrders = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDERS OVER TIME'
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            callback: function(item) {
              return item
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function(item) {
              return item
            },
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false,
          }
        }]
      }
    }, options)

    var data = []

    // Create a date range for the last 7 days
    var start = moment().subtract(6, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      data.push({
        y: getRandomInt(0, 2),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Total Orders",
        data
      }]
    }

    Charts.create(id, type, options, data)
  }

  var AverageOrderValue = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDER VALUE'
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function(item) {
              return item
            },
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options)

    var data = []

    // Create a date range for the last 7 days
    var start = moment().subtract(6, 'days').format('YYYY-MM-DD') // 7 days ago
    var end = moment().format('YYYY-MM-DD') // today
    var range = moment.range(start, end)

    // Create the graph data
    // Iterate the date range and assign a random value for each day
    for (let moment of range.by('days')) {
      data.push({
        y: getRandomInt(0, 50),
        x: moment.toDate()
      })
    }

    var data = {
      datasets: [{
        label: "Order Value",
        data
      }]
    }

    Charts.create(id, type, options, data)
  }

  var VisitsByDevice = function(id, type = 'doughnut', options = {}) {
    var data = {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        data: [267, 184, 0]
      }]
    }

    Charts.create(id, type, options, data)
  }

  ///////////////////
  // Create Charts //
  ///////////////////
  
  TotalSales('#totalSalesChart')
  TotalVisitors('#totalVisitorsChart')
  RepeatCustomerRate('#repeatCustomerRateChart')
  TotalOrders('#totalOrdersChart')
  AverageOrderValue('#averageOrderValueChart')
  VisitsByDevice('#visitsByDeviceChart')
  Views('#viewsChart')

})()