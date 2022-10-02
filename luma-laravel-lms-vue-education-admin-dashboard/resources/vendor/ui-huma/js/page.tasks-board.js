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
  
  Progress('#openProgressChart', 4, 28)
  Progress('#inProgressChart', 10, 28)
  Progress('#closedProgressChart', 14, 28)

})()