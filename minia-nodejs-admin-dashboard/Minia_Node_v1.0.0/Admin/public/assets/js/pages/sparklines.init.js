/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Sparkline chart Init
*/

// get colors array from the string
function getChartColorsArray(chartId) {
  var colors = $(chartId).attr('data-colors');
  var colors = JSON.parse(colors);
  return colors.map(function(value){
      var newValue = value.replace(' ', '');
      if(newValue.indexOf('--') != -1) {
          var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
          if(color) return color;
      } else {
          return newValue;
      }
  })
}

$(document).ready(function() {
    var SparklineCharts = function() {
      
      var pieChartColors = getChartColorsArray("#sparkline1");
      $('#sparkline1').sparkline([20, 40, 30], {
        type: 'pie',
        height: '200',
        resize: true,
        sliceColors: pieChartColors
      });
  
      var bar2ChartColors = getChartColorsArray("#sparkline2");
      $("#sparkline2").sparkline([5,6,2,8,9,4,7,10,11,12,10,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: 10,
        barSpacing: 7,
        barColor: bar2ChartColors
      });
  
      var sparkline3ChartColors = getChartColorsArray("#sparkline3");
      $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: '10',
        resize: true,
        barSpacing: '7',
        barColor: sparkline3ChartColors[0]
      });
      $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
        type: 'line',
        height: '200',
        lineColor: sparkline3ChartColors[1],
        fillColor: 'transparent',
        composite: true,
        lineWidth: 2,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)'
      });
  
      var sparkline4ChartColors = getChartColorsArray("#sparkline4");
      $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
        type: 'line',
        width: '100%',
        height: '200',
        lineColor: sparkline4ChartColors,
        fillColor: 'transparent',
        spotColor: sparkline4ChartColors,
        lineWidth: 2,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined
      });

      var sparkline5ChartColors = getChartColorsArray("#sparkline5");
      $('#sparkline5').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
        type: 'line',
        width: '100%',
        height: '200',
        chartRangeMax: 50,
        resize: true,
        lineColor: sparkline5ChartColors[0], //'#5156be',
        fillColor: sparkline5ChartColors[1], //'rgba(81, 86, 190, 0.3)',
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
      });
  
      $('#sparkline5').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
        type: 'line',
        width: '100%',
        height: '200',
        chartRangeMax: 40,
        lineColor: sparkline5ChartColors[2], //'#2ab57d',
        fillColor: sparkline5ChartColors[3], //'rgba(42, 181, 125, 0.3)',
        composite: true,
        resize: true,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
      });
  
      var sparkline6ChartColors = getChartColorsArray("#sparkline6");
      $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        width: '280',
        height: '200',
        lineColor: sparkline6ChartColors
      });
  
      var sparkline7ChartColors = getChartColorsArray("#sparkline7");
      $('#sparkline7').sparkline([10,12,12,9,7], {
        type: 'bullet',
        width: '280',
        height: '80',
        targetColor: sparkline7ChartColors[0],
        performanceColor: sparkline7ChartColors[1],
      });

      var sparkline8ChartColors = getChartColorsArray("#sparkline8");
      $('#sparkline8').sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
        type: 'box',
        width: '280',
        height: '80',
        boxLineColor: sparkline8ChartColors,
        boxFillColor: '#fbfaff',
        whiskerColor: sparkline8ChartColors,
        outlierLineColor: sparkline8ChartColors,
        medianColor: sparkline8ChartColors,
        targetColor: sparkline8ChartColors
      });
      var sparkline9ChartColors = getChartColorsArray("#sparkline9");
      $('#sparkline9').sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
        height: '80',
        width: '100%',
        type: 'tristate',
        posBarColor: sparkline9ChartColors[0],
        negBarColor: sparkline9ChartColors[1],
        zeroBarColor: sparkline9ChartColors[2],
        barWidth: 8,
        barSpacing: 3,
        zeroAxis: false
      });
  
  
  
    }
    var sparkResize;
  
    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(SparklineCharts, 500);
    });
    SparklineCharts();
  
  });