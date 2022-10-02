/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.analytics.js":
/*!**********************************!*\
  !*** ./src/js/page.analytics.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active');
  });
  Charts.init();

  var EarningsTraffic = function EarningsTraffic(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Traffic",
        data: [10, 2, 5, 15, 10, 12, 15, 25, 22, 30, 25, 40]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Products = function Products(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = arguments.length > 3 ? arguments[3] : undefined;
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area,
          tension: 0,
          borderWidth: 1
        },
        point: {
          pointStyle: 'circle',
          radius: 5,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[700],
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }, options);
    data = data || {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings",
        data: [400, 200, 450, 460, 220, 380, 800]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Courses = function Courses(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          borderColor: settings.colors.success[700],
          backgroundColor: settings.hexToRGB(settings.colors.success[100], 0.5)
        },
        point: {
          borderColor: settings.colors.success[700]
        }
      }
    }, options);
    Products(id, type, options);
  };

  var LocationDoughnut = function LocationDoughnut(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function title(a, e) {
            return e.labels[a[0].index];
          },
          label: function label(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["United States", "United Kingdom", "Germany", "India"],
      datasets: [{
        data: [25, 25, 15, 35],
        backgroundColor: [settings.colors.success[400], settings.colors.danger[400], settings.colors.primary[500], settings.colors.gray[300]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  EarningsTraffic('#earningsTrafficChart');
  LocationDoughnut('#locationDoughnutChart');
  Products('#productsChart');
  Courses('#coursesChart');
})();

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./src/js/page.analytics.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demi/Documents/GitHub/admin-flowdash/src/js/page.analytics.js */"./src/js/page.analytics.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UuYW5hbHl0aWNzLmpzIl0sIm5hbWVzIjpbIiQiLCJlIiwiQ2hhcnRzIiwiRWFybmluZ3NUcmFmZmljIiwidHlwZSIsIm9wdGlvbnMiLCJlbGVtZW50cyIsImxpbmUiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwic2V0dGluZ3MiLCJhcmVhIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJQcm9kdWN0cyIsInRlbnNpb24iLCJib3JkZXJXaWR0aCIsInBvaW50IiwicG9pbnRTdHlsZSIsInJhZGl1cyIsImhvdmVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJzY2FsZXMiLCJ5QXhlcyIsImRpc3BsYXkiLCJ4QXhlcyIsIkNvdXJzZXMiLCJMb2NhdGlvbkRvdWdobnV0IiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJ0aXRsZSIsImEiLCJ0IiwiaG92ZXJCb3JkZXJDb2xvciIsIndoaXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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LENBQWZBO0FBQ0EwQixrQkFBZ0IsQ0FBaEJBLHdCQUFnQixDQUFoQkE7QUFDQWIsVUFBUSxDQUFSQSxnQkFBUSxDQUFSQTtBQUNBWSxTQUFPLENBQVBBLGVBQU8sQ0FBUEE7QUF2SEYsSyIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvcGFnZS5hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgICBcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ2hpZGUuYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfSlcblxuICBDaGFydHMuaW5pdCgpXG5cblxuICB2YXIgRWFybmluZ3NUcmFmZmljID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBmaWxsOiAnc3RhcnQnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY2hhcnRzLmNvbG9ycy5hcmVhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJUcmFmZmljXCIsXG4gICAgICAgIGRhdGE6IFsxMCwgMiwgNSwgMTUsIDEwLCAxMiwgMTUsIDI1LCAyMiwgMzAsIDI1LCA0MF1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBQcm9kdWN0cyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30sIGRhdGEpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgZmlsbDogJ3N0YXJ0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNoYXJ0cy5jb2xvcnMuYXJlYSxcbiAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgcmFkaXVzOiA1LFxuICAgICAgICAgIGhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs3MDBdLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIGRhdGEgPSBkYXRhIHx8IHtcbiAgICAgIGxhYmVsczogW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkVhcm5pbmdzXCIsXG4gICAgICAgIGRhdGE6IFs0MDAsIDIwMCwgNDUwLCA0NjAsIDIyMCwgMzgwLCA4MDBdXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgQ291cnNlcyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzcwMF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5oZXhUb1JHQihzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1sxMDBdLCAwLjUpXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzcwMF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBQcm9kdWN0cyhpZCwgdHlwZSwgb3B0aW9ucylcbiAgfVxuXG4gIHZhciBMb2NhdGlvbkRvdWdobnV0ID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnZG91Z2hudXQnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubGFiZWxzW2FbMF0uaW5kZXhdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHQgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIGUuZGF0YXNldHNbMF0uZGF0YVthLmluZGV4XSArIFwiJTwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiVW5pdGVkIFN0YXRlc1wiLCBcIlVuaXRlZCBLaW5nZG9tXCIsIFwiR2VybWFueVwiLCBcIkluZGlhXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFsyNSwgMjUsIDE1LCAzNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW3NldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzQwMF0sIHNldHRpbmdzLmNvbG9ycy5kYW5nZXJbNDAwXSwgc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSwgc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXV0sXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwiZGFya1wiID09IHNldHRpbmdzLmNoYXJ0cy5jb2xvclNjaGVtZSA/IHNldHRpbmdzLmNvbG9ycy5ncmF5WzgwMF0gOiBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gQ3JlYXRlIENoYXJ0cyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gIEVhcm5pbmdzVHJhZmZpYygnI2Vhcm5pbmdzVHJhZmZpY0NoYXJ0JylcbiAgTG9jYXRpb25Eb3VnaG51dCgnI2xvY2F0aW9uRG91Z2hudXRDaGFydCcpXG4gIFByb2R1Y3RzKCcjcHJvZHVjdHNDaGFydCcpXG4gIENvdXJzZXMoJyNjb3Vyc2VzQ2hhcnQnKVxuICBcblxufSkoKSJdLCJzb3VyY2VSb290IjoiIn0=