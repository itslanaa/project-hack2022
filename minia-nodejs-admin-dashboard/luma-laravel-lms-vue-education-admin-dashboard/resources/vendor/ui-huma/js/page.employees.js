(function(){
  'use strict';

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
  
  Progress('#inTimeProgressChart', 24.84, 27)
  Progress('#lateProgressChart', 6.21, 27)
  Progress('#absentsProgressChart', 1.62, 27)
  Progress('#vacationProgressChart', 0.27, 27)
  
})()