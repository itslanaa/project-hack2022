(function(){
  'use strict';

  Charts.init()

  var Progress = function(id, value, total, backgroundColor, type = 'doughnut', options = {}) {
    options = Chart.helpers.merge({
      cutoutPercentage: 90,
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
        custom: function() {},
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
      // labels: ["In-time", "Other"],
      datasets: [{
        data: [value, total - value],
        backgroundColor: [backgroundColor, settings.colors.gray[50]],
        borderColor: settings.colors.white,
        hoverBorderColor: settings.colors.transparent,
        borderWidth: 0
      }]
    }

    Charts.create(id, type, options, data)
  }

  ///////////////////
  // Create Charts //
  ///////////////////

  $('[data-toggle="progress-chart"]').each(function() {
    var element = $(this)
    var value = $(this).data('progress-chart-value')
    var color = $(this).data('progress-chart-color')
    var tone = $(this).data('progress-chart-tone')
    
    Progress(element, value, 100, settings.colors[color][tone])
  })

})()