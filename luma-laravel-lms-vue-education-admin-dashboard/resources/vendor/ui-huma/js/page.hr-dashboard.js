(function(){
  'use strict';

  var Attendance = function(id, type = 'doughnut', options = {}) {
    options = Chart.helpers.merge({
      cutoutPercentage: 75,
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
      labels: ["In-time", "Late", "Absents", "Out on Vacation"],
      datasets: [{
        data: [25, 18, 12, 9],
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
  
  Attendance('#attendanceDoughnutChart')
  
})()