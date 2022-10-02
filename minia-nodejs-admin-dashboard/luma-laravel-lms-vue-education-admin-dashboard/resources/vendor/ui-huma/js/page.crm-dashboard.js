(function(){
  'use strict';

  window['moment-range'].extendMoment(moment);

  var Views = function(id, type = 'line', options = {}) {
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
        y: Math.round(views * 0.5),
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

  // Create Chart
  Views('#viewsChart')

})()