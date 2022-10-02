

/*
 Charting directives
 Provides custom directives for charting elements
 */

angular.module("app.chart.directives", []).directive("gaugeChart", [
        function() {
            return {
                scope: {
                    gaugeData: "=",
                    gaugeOptions: "="
                },
                link: function(scope, ele) {
                    var data, gauge, options;

                    data = scope.gaugeData;
                        options = scope.gaugeOptions;

                        gauge = new Gauge(ele[0]).setOptions(options);
                        gauge.maxValue = data.maxValue;
                        gauge.animationSpeed = data.animationSpeed;
                        gauge.set(data.val);

                    //Update when charts data changes
                    scope.$watch(function() {
                      return scope.gaugeData;
                    }, function(value) {
                      if(!value) return;

                      data = scope.gaugeData;
                      options = scope.gaugeOptions;

                      gauge = new Gauge(ele[0]).setOptions(options);
                      gauge.maxValue = data.maxValue;
                      gauge.animationSpeed = data.animationSpeed;
                      gauge.set(data.val);
                    });
                }
            };
        }
    ]).directive('chart', function () {
        var baseWidth = 600;
        var baseHeight = 400;

        return {
            restrict: 'E',
            template: '<canvas></canvas>',
            scope: {
                chartObject: "=value",
                data: "="
            },
            link: function (scope, element, attrs) {
                var canvas  = element.find('canvas')[0],
                    context = canvas.getContext('2d'),
                    chart;

                var options = {
                    type:   attrs.type   || "Line",
                    width:  attrs.width  || baseWidth,
                    height: attrs.height || baseHeight
                };
                canvas.width = options.width;
                canvas.height = options.height;
                chart = new Chart(context);

                var chartType = attrs.type;

                chart[chartType](scope.data, options);

                //Update when charts data changes
                scope.$watch(function() { return scope.chartObject; }, function(value) {
                    if(!value) return;
                    var chartType = options.type;
                    chart[chartType](scope.chartObject.data, scope.chartObject.options);
                });
            }
        };
    }).directive("flotChart", [
        function() {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function(scope, ele) {
                  var data, options, plot;


                  // hard-code color indices to prevent them from shifting as
                  // countries are turned on/off

                  var datasets;

                  datasets = scope.data;

                  var i = 0;
                  $.each(datasets, function(key, val) {
                      val.color = i;
                      ++i;
                  });

                  // insert checkboxes

                  if($(ele[0]).parent().find(".choices").length > 0){

                      // insert checkboxes
                      var choiceContainer = $(ele[0]).parent().find(".choices");
                      var material_choiceContainer = $(ele[0]).parent().find(".choice-switches");

                      choiceContainer.html("");

                      $.each(datasets, function(key, val) {

                          choiceContainer.append("<br/><div class='choice-item'><label for='id" + key + "' class='ui-checkbox'>" +
                          "<input name='" + key +
                          "' type='checkbox' id='id" + key + "' checked='checked' value='option1'>" +
                          "<span>" + val.label + "</span>" +
                          "</label></div>");
                      });

                      var plotAccordingToChoices = function() {

                          var data_to_push = [];

                          choiceContainer.find("input:checked").each(function () {
                              var key = $(this).attr("name");
                              if (key && datasets[key]) {
                                  data_to_push.push(datasets[key]);
                              }
                          });

                          if (data_to_push.length > 0) {
                              $.plot(ele[0], data_to_push, scope.options);
                          }
                      };

                      choiceContainer.find("input").click(plotAccordingToChoices);

                  }

                  //plotAccordingToChoices();

                  return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options);
                }
            };
        }
    ]).directive("flotChartRealtime", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    var data, getRandomData, plot, totalPoints, update, updateInterval;
                    return data = [], totalPoints = 300, getRandomData = function() {
                        var i, prev, res, y;
                        for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints;){
                            if(data.length > 0){
                                prev = data[data.length - 1];
                            }
                            else{
                                prev = 50;
                            }
                            y = prev + 10 * Math.random() - 5;
                            if(0 > y){
                                y = 0;
                            }else{
                                if(y > 100){
                                    y = 100;
                                }
                            }
                            data.push(y);
                        }
                        for (res = [], i = 0; i < data.length;){
                            res.push([i, data[i]]);
                            ++i;
                        }
                        return res;
                    }, update = function() {
                        plot.setData([getRandomData()]);
                        plot.draw();
                        setTimeout(update, updateInterval);
                    }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {
                        series: {
                            lines: {
                                show: !0,
                                fill: !0
                            },
                            shadowSize: 0
                        },
                        yaxis: {
                            min: 0,
                            max: 100,
                            show: !0,
                            color:"#f5f5f5"
                        },
                        xaxis: {
                            show: !0,
                            color:"#f5f5f5"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                          defaultTheme: !1,
                          content:'<div class="tooltip-header">Realtime</div>' +
                          '<div class="tooltip-body">%y current items</div>',
                          shifts: {
                            x: -95,
                            y: 25
                          }
                        },
                        grid: {
                            hoverable: !0,
                            borderWidth: 1,
                            borderColor: "#f5f5f5"
                        },
                        colors: [scope.color]
                    }), update();
                }
            };
        }
    ]).directive("sparkline", [
        function() {
            return {
                scope: {
                    sparkData: "=",
                    sparkOptions: "="
                },
                link: function(scope, ele) {
                    var data, options, sparkResize, sparklineDraw;

                    data = scope.sparkData;
                        options = scope.sparkOptions;
                        sparkResize = void 0;
                        sparklineDraw = function() {

                            ele.sparkline(data, options);

                        };
                    $(window).resize(function() {
                        return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200);
                    });
                    sparklineDraw();
                }
            };
        }
    ]).directive("morrisChart", [
        function() {
            return {
                scope: {
                    data: "="
                },
                link: function(scope, ele, attrs) {
                    var colors, data, func, options,chart;
                    switch (data = scope.data, attrs.type) {
                        case "line":
                            return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                                element: ele[0],
                                data: data,
                                xkey: attrs.xkey,
                                ykeys: JSON.parse(attrs.ykeys),
                                labels: JSON.parse(attrs.labels),
                                lineWidth: attrs.lineWidth || 2,
                                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"]
                            },chart = new Morris.Line(options),$(window).resize(function(){
                                chart.redraw();
                            });
                        case "area":
                            return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                                element: ele[0],
                                data: data,
                                xkey: attrs.xkey,
                                ykeys: JSON.parse(attrs.ykeys),
                                labels: JSON.parse(attrs.labels),
                                lineWidth: attrs.lineWidth || 2,
                                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                                behaveLikeLine: attrs.behaveLikeLine || !1,
                                fillOpacity: attrs.fillOpacity || "auto",
                                pointSize: attrs.pointSize || 4
                            }, chart = new Morris.Area(options),$(window).resize(function(){
                                chart.redraw();
                            });
                        case "bar":
                            return colors = void 0 === attrs.barColors || "" === attrs.barColors ? null : JSON.parse(attrs.barColors), options = {
                                element: ele[0],
                                data: data,
                                xkey: attrs.xkey,
                                ykeys: JSON.parse(attrs.ykeys),
                                labels: JSON.parse(attrs.labels),
                                barColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                                stacked: attrs.stacked || null
                            }, chart = new Morris.Bar(options),$(window).resize(function(){
                                //chart.redraw();
                            });
                        case "donut":
                            /*jslint evil: true */
                            return colors = void 0 === attrs.colors || "" === attrs.colors ? null : JSON.parse(attrs.colors), options = {
                                element: ele[0],
                                data: data,
                                colors: colors || ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"]
                            }, attrs.formatter && (func = new Function("y", "data", attrs.formatter), options.formatter = func), chart = new Morris.Donut(options),$(window).resize(function(){
                                chart.redraw();
                            });
                    }
                }
            };
        }
    ]);


/*
 App custom Directives
 Custom directives for the app like custom background, minNavigation etc
 */

angular.module("app.directives", []).directive("imgHolder", [
        function() {
            return {
                link: function(scope, ele) {
                    return Holder.run({
                        images: ele[0]
                    });
                }
            };
        }
    ]).directive("customBackground", function() {
        return {
            controller: ["$scope", "$element", "$location",
                function($scope, $element, $location) {
                    var addBg, path;
                    return path = function() {
                        return $location.path();
                    }, addBg = function(path) {
                        switch ($element.removeClass("body-home body-special body-tasks body-lock"), path) {
                            case "/":
                                return $element.addClass("body-home");
                            case "/404":
                            case "/pages/500":
                            case "/pages/signin":
                            case "/pages/signup":
                            case "/pages/forgot":
                                return $element.addClass("body-special");
                            case "/pages/lock-screen":
                                return $element.addClass("body-special body-lock");
                            case "/tasks":
                                return $element.addClass("body-tasks");
                        }
                    }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0;
                    });
                }
            ]
        };
    }).directive("uiColorSwitch", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.find(".color-option").on("click", function(event) {
                        var $this, hrefUrl, style;
                        if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style){
                            hrefUrl = "styles/main.css";
                            $('link[href^="styles/main"]').attr("href", hrefUrl);
                        }
                        else {
                            if (!style) return !1;
                            style = "-" + style;
                            hrefUrl = "styles/main" + style + ".css";
                            $('link[href^="styles/main"]').attr("href", hrefUrl);
                        }
                        return event.preventDefault();
                    });
                }
            };
        }
    ]).directive("toggleMinNav", ["$rootScope",
        function($rootScope) {
            return {
                link: function(scope, ele) {
                    var $content, $nav, $window, Timer, app, updateClass;

                    return app = $("#app"), $window = $(window), $nav = $("#nav-container"), $content = $("#content"), ele.on("click", function(e) {

                        if(app.hasClass("nav-min")){
                            app.removeClass("nav-min");
                        }
                        else{
                            app.addClass("nav-min");
                            $rootScope.$broadcast("minNav:enabled");
                            e.preventDefault();
                        }

                    }), Timer = void 0, updateClass = function() {
                        var width;
                        return width = $window.width(), (980 > width && !app.hasClass("on-canvas")) ? app.addClass("nav-min") : void 0;
                    },initResize = function() {
                        var width;
                        return width = $window.width(), 980 > width ? (app.hasClass("nav-min") ? "" : app.addClass("nav-min")) : (app.hasClass("nav-min")? "" : app.removeClass("nav-min"));
                    }, $window.resize(function() {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300);
                    }),initResize();

                }
            };
        }
    ]).directive("collapseNav", [
        function() {
            return {
                link: function(scope, ele) {
                    var $a, $aRest, $lists, $listsRest, app;
                    return $lists = ele.find("ul").parent("li"),
                        //$lists.append('<i class="fa fa-arrow-circle-o-right icon-has-ul"></i>'),
                        $a = $lists.children("a"),
                        $listsRest = ele.children("li").not($lists),
                        $aRest = $listsRest.children("a"),
                        app = $("#app"),
                        $a.click(function(event) {
                            var $parent, $this;
                            return (app.hasClass("nav-min") || event.$material) ? !1 : ($this = $(this),
                                $parent = $this.parent("li"),
                                $lists.not($parent).removeClass("open").find("ul").slideUp(),
                                $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault());
                        }), $aRest.on("click", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    }), scope.$on("minNav:enabled", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    });
                }
            };
        }
    ]).directive("highlightActive", [
        function() {
            return {
                controller: ["$scope", "$element", "$attrs", "$location",
                    function($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        return links = $element.find("a"), path = function() {
                            return $location.path();
                        }, highlightActive = function(links, path) {
                            return path = "#" + path, angular.forEach(links, function(link) {
                                var $li, $link, href;
                                return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0;
                            });
                        }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
                            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0;
                        });
                    }
                ]
            };
        }
    ]).directive("toggleOffCanvas", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.on("click", function() {
                        return $("#app").toggleClass("on-canvas").toggleClass("nav-min");
                    });
                }
            };
        }
    ]).directive("slimScroll", [
        function() {
            return {
                link: function(scope, ele, attrs) {
                    return ele.slimScroll({
                        height: attrs.scrollHeight || "100%"
                    });
                }
            };
        }
    ]).directive("goBack", [
        function() {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$window",
                    function($scope, $element, $window) {
                        return $element.on("click", function() {
                            return $window.history.back();
                        });
                    }
                ]
            };
        }
    ]);



/*
 App Form Ui Directives
 Custom directives for Form Ui elements
 */

angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.slider();
                }
            };
        }
    ]).directive("uiFileUpload", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.bootstrapFileInput();
                }
            };
        }
    ]).directive("uiSpinner", [
        function() {
            return {
                restrict: "A",
                compile: function(ele) {
                    return ele.addClass("ui-spinner"), {
                        post: function() {
                            return ele.spinner();
                        }
                    };
                }
            };
        }
    ]).directive("uiWizardForm", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.steps();
                }
            };
        }
    ]);

/**************************
 App Map
 **************************/

angular.module("app.map", []).directive("uiJqvmap", [
  function() {
    return {
      restrict: "A",
      scope: {
        options: "="
      },
      link: function(scope, ele) {
        var options;
        return options = scope.options, ele.vectorMap(options);
      }
    };
  }
]);