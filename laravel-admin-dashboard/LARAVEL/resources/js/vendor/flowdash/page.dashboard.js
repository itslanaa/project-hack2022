(function(){
  'use strict';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  window['moment-range'].extendMoment(moment);
    
  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active')
  })

  Charts.init()

  var TotalSales = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'SALES OVER TIME'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16,
        }
      },
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10,
            callback: function(item) {
              return "$" + item
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
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "</span>"
          }
        }
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
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16,
        }
      },
      barRoundness: 1.2,
      barThickness: 8,
      scales: {
        yAxes: [{
          ticks: {
            callback: function(a) {
              if (!(a % 10))
                return a + "k"
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
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "k</span>"
          }
        }
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
        barPercentage: 0.5,
        barThickness: 20,
      }]
    }

    Charts.create(id, type, options, data)
  }

  var RepeatCustomerRate = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      elements: {
        line: {
          tension: 0,
        }
      },
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'CUSTOMERS'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            autoSkipPadding: 0,
            padding: 4,
            maxTicksLimit: 4,
            callback: function(item) {
              return item + "%"
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
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "%</span>"
          }
        }
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
        data: firstTimeData,
        borderWidth: 2,
        borderColor: settings.colors.primary[400],
        backgroundColor: settings.colors.primary[400],
        pointBackgroundColor: settings.colors.primary[400]
      }, {
        label: "Returning",
        data: returningData,
        borderWidth: 2,
        borderColor: settings.colors.success[400],
        backgroundColor: settings.colors.success[400],
        pointBackgroundColor: settings.colors.success[400]
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
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16,
        }
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
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>"
          }
        }
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
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10,
            callback: function(item) {
              return "$" + item
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
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "</span>"
          }
        }
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
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function(a, e) {
            return e.labels[a[0].index]
          },
          label: function(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + " visits</span>"
          }
        }
      }
    }, options)

    var data = {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        data: [267, 184, 0],
        backgroundColor: [settings.colors.success[400], settings.colors.primary[500], settings.colors.gray[300]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    }

    Charts.create(id, type, options, data)
  }
  
  var EarningsTraffic = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function(a) {
              if (!(a % 10))
                return "$" + a + "k"
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>"
          }
        }
      }
    }, options)

    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Traffic",
        data: [10, 2, 5, 15, 10, 12, 15, 25, 22, 30, 25, 40]
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Products = function(id, type = 'line', options = {}, data) {
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area,
          tension: 0,
          borderWidth: 1
        },
        point: {
          pointStyle: 'circle',
          radius: 5,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[700],
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }, options)

    data = data || {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings",
        data: [400, 200, 450, 460, 220, 380, 800]
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Courses = function(id, type = 'line', options = {}) {
    options = Chart.helpers.merge({
      elements: {
        line: {
          borderColor: settings.colors.success[700],
          backgroundColor: settings.hexToRGB(settings.colors.success[100], 0.5)
        },
        point: {
          borderColor: settings.colors.success[700]
        }
      }
    }, options)

    Products(id, type, options)
  }

  var LocationDoughnut = function(id, type = 'doughnut', options = {}) {
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function(a, e) {
            return e.labels[a[0].index]
          },
          label: function(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>"
          }
        }
      }
    }, options)

    var data = {
      labels: ["United States", "United Kingdom", "Germany", "India"],
      datasets: [{
        data: [25, 25, 15, 35],
        backgroundColor: [settings.colors.success[400], settings.colors.danger[400], settings.colors.primary[500], settings.colors.gray[300]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    }

    Charts.create(id, type, options, data)
  }

  var TrafficBar = function(id, type = 'roundedBar', options = {}) {
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      scales: {
        yAxes: [{
          ticks: {
            callback: function(a) {
              if (!(a % 10))
                return a + "k"
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "k</span>"
          }
        }
      }
    }, options)

    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        barPercentage: 0.5,
        barThickness: 20,
      }]
    }

    Charts.create(id, type, options, data)
  }

  $('.stats-chart').each((index, element) => {
    let ctx = element.getContext('2d')
    let stats_data = []

    for (var i = 6; i >= 0; i--) {
      stats_data.push(getRandomInt(100, 300));
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels:
        [
        "01", "02", "03", "04",
        "05", "06", "07", "08"
        ],
        datasets: [{
          data: stats_data,
          borderWidth: 2,
          borderColor: settings.colors.primary[400],
          backgroundColor: settings.colors.primary[50],
          pointBackgroundColor: settings.colors.primary[400]
        }]
      },
      options: {
        elements: { point: { radius: 0 } },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false,
          labels: { display: false }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              // zeroLineColor: colors.border_color
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
              // zeroLineColor: colors.border_color
            },
            ticks: {
              display: false
            }
          }]
        }
      }
    });
  });

  ///////////////////
  // Create Charts //
  ///////////////////
  
  TotalSales('#totalSalesChart')
  TotalVisitors('#totalVisitorsChart')
  RepeatCustomerRate('#repeatCustomerRateChart')
  TotalOrders('#totalOrdersChart')
  AverageOrderValue('#averageOrderValueChart')
  VisitsByDevice('#visitsByDeviceChart')

  TrafficBar('#trafficBarChart')
  EarningsTraffic('#earningsTrafficChart')
  LocationDoughnut('#locationDoughnutChart')
  Products('#productsChart')
  Courses('#coursesChart')

})()