const extend = (object, value) => {
  for (var key in value) "object" != typeof value[key] ? object[key] = value[key] : extend(object[key], value[key])
}

const add = (element) => {
  var data = element.data("add")
  var chart = $(element.data("target")).data("chart")

  if (element.is(":checked")) {
    function addRecursive(chart, data) {
      for (var o in data) Array.isArray(data[o]) ? data[o].forEach(function(a) {
        chart[o].push(a)
      }) : addRecursive(chart[o], data[o])
    }
    addRecursive(chart, data)
  } 
  else {
    function removeRecursive(chart, data) {
      for (var o in data) Array.isArray(data[o]) ? data[o].forEach(function(a) {
        chart[o].pop()
      }) : removeRecursive(chart[o], data[o])
    }
    removeRecursive(chart, data)
  }

  chart.update()
}

const update = (element) => {
  var data = element.data("update")
  var chart = $(element.data("target")).data("chart")
  
  extend(chart, data)

  if (void 0 !== element.data("prefix") || void 0 !== element.data("suffix")) {
    let prefix = element.data("prefix") ? element.data("prefix") : ""
    let suffix = element.data("suffix") ? element.data("suffix") : ""

    if (chart.options.scales !== undefined) {
      chart.options.scales.yAxes[0].ticks.callback = function(a) {
        if (!(a % 10)) return prefix + a + suffix
      }
    }

    chart.options.tooltips.callbacks.label = function(a, e) {
      var t = e.datasets[a.datasetIndex].label || "",
          o = a.yLabel || e.datasets[0].data[a.index],
          r = "";
      return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + prefix + o + suffix + "</span>"
    }
  }

  chart.update()
}

const globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontFamily: settings.fonts.base,
  defaultFontSize: 13,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[700]
    },
    line: {
      tension: .4,
      borderWidth: 3,
      borderColor: settings.colors.primary[700],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: "rounded"
    },
    rectangle: {
      backgroundColor: settings.colors.primary[700]
    },
    arc: {
      backgroundColor: settings.colors.primary[700],
      borderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white,
      borderWidth: 4
    }
  },
  tooltips: {
    enabled: !1,
    mode: "index",
    intersect: !1,
    custom: function(r) {
      var a = $("#chart-tooltip");
      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function(a) {
                return a.lines
              }),
              n = "";
          n += '<div class="arrow"></div>', e.forEach(function(a) {
              n += '<h3 class="popover-header text-center">' + a + "</h3>"
          }), l.forEach(function(a, e) {
              var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                  o = 1 < l.length ? "justify-content-left" : "justify-content-center";
              n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
          }), a.html(n)
        }
        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
          
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        })

      } else a.css("display", "none")
    },
    callbacks: {
      label: function(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>"
      }
    }
  }
}

const doughnutSettings = {
  cutoutPercentage: 83,
  tooltips: {
    callbacks: {
      title: function(a, e) {
        return e.labels[a[0].index]
      },
      label: function(a, e) {
        var t = "";
        return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>"
      }
    }
  },
  legendCallback: function(a) {
    var o = a.data,
        r = "";
    return o.labels.forEach(function(a, e) {
      var t = o.datasets[0].backgroundColor[e];
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += a, r += "</span>"
    }), r
  }
}

const create = (id, type = 'line', options = {}, data = {}) => {
  var element = $(id)
  var chart = new Chart(element, {
    type: type,
    options: options,
    data: data
  })
  element.data("chart", chart)
  if (element.data("chart-legend")) {
    document.querySelector(element.data("chart-legend"))
      .innerHTML = chart.generateLegend()
  }
}

const init = () => {
  extend(Chart, {
    defaults: {
      global: globalSettings,
      doughnut: doughnutSettings
    }
  })

  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      drawBorder: !1,
      drawTicks: !1,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function(a) {
        if (!(a % 10)) return a
      }
    }
  })

  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  })

  $('[data-toggle="chart"]').on({
    change: function() {
      var el = $(this)
      if (el.is("[data-add]")) {
        add(el)
      }
    },
    click: function() {
      var el = $(this)
      if (el.is("[data-update]")) {
        update(el)
      }
    }
  })
}

const Charts = {
  settings,
  init,
  add,
  update,
  create
}

if (window !== undefined) {
  window.Charts = Charts
}