
/**************************
 Initialize the Angular App
 **************************/

var app = angular.module("app", ["ngRoute","ui.router", "ngAnimate","ngAria","ngMessages","ngMaterial","app.config", "ui.bootstrap", "easypiechart","app.material", "mgo-angular-wizard","ui.tree", "ngMap", "ngTagsInput", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.map", "app.task", "app.chart.ctrls", "app.chart.directives","countTo","app.music"]).run(["$rootScope", "$location",
    function ($rootScope, $location) {

        $(document).ready(function(config){

            setTimeout(function(){
                $('.page-loading-overlay').addClass("loaded");
                $('.load_circle_wrapper').addClass("loaded");
            },1000);

        });

    }] ).config(function($stateProvider, $urlRouterProvider) {
      //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/dashboard");
      //
      // Now set up the states
      $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/views/dashboards/dashboard.html"
        })
        .state('dashboard1', {
          url: "/dashboard/dashboard1",
          templateUrl: "app/views/dashboards/dashboard1.html"
        })
        .state('dashboard2', {
            url: "/dashboard/dashboard2",
            templateUrl: "app/views/dashboards/dashboard2.html"
        })
        .state('typography', {
            url: "/ui/typography",
            templateUrl: "app/views/ui_elements/typography.html"
        })
        .state('buttons', {
            url: "/ui/buttons",
            templateUrl: "app/views/ui_elements/buttons.html"
        })
        .state('cards', {
            url: "/ui/cards",
            templateUrl: "app/views/ui_elements/cards.html"
        })
        .state('material-icons', {
            url: "/ui/material-icons",
            templateUrl: "app/views/ui_elements/icons.html"
        })
        .state('icons', {
            url: "/ui/icons",
            templateUrl: "app/views/ui_elements/icons.html"
        })
        .state('grids', {
            url: "/ui/grids",
            templateUrl: "app/views/ui_elements/grids.html"
        })
        .state('widgets', {
            url: "/ui/widgets",
            templateUrl: "app/views/ui_elements/widgets.html"
        })
        .state('components', {
            url: "/ui/components",
            templateUrl: "app/views/ui_elements/components.html"
        })
        .state('material', {
            url: "/ui/material-design",
            templateUrl: "app/views/ui_elements/material.html"
        })
        .state('nested-lists', {
            url: "/ui/nested-lists",
            templateUrl: "app/views/ui_elements/nested-lists.html"
        })
        .state('form-elements', {
            url: "/forms/elements",
            templateUrl: "app/views/forms/elements.html"
        })
        .state('form-layouts', {
            url: "/forms/layouts",
            templateUrl: "app/views/forms/layouts.html"
        })
        .state('form-validation', {
            url: "/forms/validation",
            templateUrl: "app/views/forms/validation.html"
        })
        .state('form-wizard', {
            url: "/forms/wizard",
            templateUrl: "app/views/forms/wizard.html"
        })
        .state('gmap', {
            url: "/maps/gmap",
            templateUrl: "app/views/maps/gmap.html"
        })
        .state('jqvmap', {
            url: "/maps/jqvmap",
            templateUrl: "app/views/maps/jqvmap.html"
        })
        .state('tables-static', {
            url: "/tables/static",
            templateUrl: "app/views/tables/static.html"
        })
        .state('tables-responsive', {
            url: "/tables/responsive",
            templateUrl: "app/views/tables/responsive.html"
        })
        .state('tables-dynamic', {
            url: "/tables/dynamic",
            templateUrl: "app/views/tables/dynamic.html"
        })
        .state('charts-others', {
            url: "/charts/others",
            templateUrl: "app/views/charts/charts.html"
        })
        .state('charts-morris', {
            url: "/charts/morris",
            templateUrl: "app/views/charts/morris.html"
        })
        .state('charts-chartjs', {
            url: "/charts/chartjs",
            templateUrl: "app/views/charts/chartjs.html"
        })
        .state('charts-flot', {
            url: "/charts/flot",
            templateUrl: "app/views/charts/flot.html"
        })
        .state('pages-404', {
            url: "/pages/404",
            templateUrl: "app/views/pages/404.html"
        })
        .state('pages-500', {
            url: "/pages/500",
            templateUrl: "app/views/pages/500.html"
        })
        .state('about', {
            url: "/pages/about",
            templateUrl: "app/views/pages/about.html"
        })
        .state('contact', {
            url: "/pages/contact",
            templateUrl: "app/views/pages/contact.html"
        })
        .state('forgot-password', {
            url: "/pages/forgot",
            templateUrl: "app/views/pages/forgot-password.html"
        })
        .state('profile', {
            url: "/pages/profile",
            templateUrl: "app/views/pages/profile.html"
        })
        .state('signin', {
            url: "/pages/signin",
            templateUrl: "app/views/pages/signin.html"
        })
        .state('signup', {
            url: "/pages/signup",
            templateUrl: "app/views/pages/signup.html"
        })
        .state('tasks', {
            url: "/tasks",
            templateUrl: "app/views/tasks/tasks.html"
        });
  })
  .config(function($mdThemingProvider,$mdGestureProvider) {

  $mdGestureProvider.skipClickHijack();

  $mdThemingProvider.theme('default')
        .primaryPalette('cyan',{
            'default': '800'
        })
        .accentPalette('grey',{
            'default': '800'
        })
        /*.primaryPalette('deep-orange',{
          'default': '600'
        })
        .accentPalette('grey',{
          'default': '900'
        })*/
        /*.primaryPalette('indigo',{
          'default': '500'
        })
        .accentPalette('grey',{
          'default': '600'
        })*/
        ;
});

/**************************
 Timer
 **************************/
angular.module('countTo', []).controller("countTo", ["$scope",
        function($scope) {

            return $scope.countersmall1 = {
                countTo: 20,
                countFrom: 0
            },$scope.countersmall2 = {
                countTo: 42,
                countFrom: 0
            },$scope.countersmall3 = {
                countTo: 90,
                countFrom: 0
            },$scope.countersmall1dash = {
                countTo: 420,
                countFrom: 0
            },$scope.countersmall2dash = {
                countTo: 742,
                countFrom: 0
            },$scope.countersmall3dash = {
                countTo: 100,
                countFrom: 0
            };

        }]).directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    countTo = parseInt(attrs.countTo) || 0;
                    scope.value = parseInt(attrs.value, 10) || 0;
                    duration = (parseFloat(attrs.duration) * 1000) || 0;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                };

                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = countTo;
                        } else {
                            e.textContent = Math.round(num);
                            tick();
                        }
                    }, refreshInterval);

                };

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                };

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        };

    }]);