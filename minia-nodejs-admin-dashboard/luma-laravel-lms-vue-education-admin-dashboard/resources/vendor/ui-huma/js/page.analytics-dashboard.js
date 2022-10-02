(function(){
  'use strict';

  var EarningsTraffic = function(id, type = 'line', options = {}) {
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Traffic",
        data: [10, 2, 5, 15, 10, 12, 15, 25, 22, 30, 25, 40]
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Products = function(id, type = 'line', options = {}) {
    var data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings",
        data: [400, 200, 450, 460, 220, 380, 800]
      }]
    }

    Charts.create(id, type, options, data)
  }

  var LocationDoughnut = function(id, type = 'doughnut', options = {}) {
    var data = {
      labels: ["United States", "United Kingdom", "Germany"],
      datasets: [{
        data: [25, 25, 15],
        backgroundColor: [],
        borderColor: settings.colors.white,
        hoverBorderColor: settings.colors.white
      }]
    }

    Charts.create(id, type, options, data)
  }

  ///////////////////
  // Create Charts //
  ///////////////////
  
  EarningsTraffic('#earningsTrafficChart')
  LocationDoughnut('#locationDoughnutChart')
  Products('#productsChart')
  Products('#coursesChart')

})()