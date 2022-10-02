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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/progress-charts.js":
/*!*******************************************!*\
  !*** ./src/js/plugins/progress-charts.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Charts.init();

  var Progress = function Progress(id, value, total, backgroundColor) {
    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'doughnut';
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    options = Chart.helpers.merge({
      cutoutPercentage: 90,
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
        custom: function custom() {},
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
      // labels: ["In-time", "Other"],
      datasets: [{
        data: [value, total - value],
        backgroundColor: [backgroundColor, settings.colors.gray[50]],
        borderColor: settings.colors.white,
        hoverBorderColor: settings.colors.transparent,
        borderWidth: 0
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  $('[data-toggle="progress-chart"]').each(function () {
    var element = $(this);
    var value = $(this).data('progress-chart-value');
    var color = $(this).data('progress-chart-color');
    var tone = $(this).data('progress-chart-tone');
    Progress(element, value, 100, settings.colors[color][tone]);
  });
})();

/***/ }),

/***/ 20:
/*!*************************************************!*\
  !*** multi ./src/js/plugins/progress-charts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demi/Documents/GitHub/admin-flowdash/src/js/plugins/progress-charts.js */"./src/js/plugins/progress-charts.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvcHJvZ3Jlc3MtY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsIlByb2dyZXNzIiwidHlwZSIsIm9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwiYXNwZWN0UmF0aW8iLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImN1c3RvbSIsImNhbGxiYWNrcyIsInRpdGxlIiwiZSIsImEiLCJsYWJlbCIsInQiLCJkYXRhIiwiZGF0YXNldHMiLCJ0b3RhbCIsImJhY2tncm91bmRDb2xvciIsInNldHRpbmdzIiwiYm9yZGVyQ29sb3IiLCJob3ZlckJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCIkIiwiZWxlbWVudCIsInZhbHVlIiwiY29sb3IiLCJ0b25lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUFBLFFBQU0sQ0FBTkE7O0FBRUEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsb0NBQTZFO0FBQUEsUUFBakNDLElBQWlDLHVFQUExQixVQUEwQjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUMxRkEsV0FBTyxHQUFHLEtBQUssQ0FBTCxjQUFvQjtBQUM1QkMsc0JBQWdCLEVBRFk7QUFFNUJDLGlCQUFXLEVBRmlCO0FBRzVCQyxnQkFBVSxFQUhrQjtBQUk1QkMseUJBQW1CLEVBSlM7QUFLNUJDLGNBQVEsRUFBRTtBQUNSQyxlQUFPLEVBREM7QUFFUkMsY0FBTSxFQUFFLGtCQUFXLENBRlg7QUFHUkMsaUJBQVMsRUFBRTtBQUNUQyxlQUFLLEVBQUUscUJBQWU7QUFDcEIsbUJBQU9DLENBQUMsQ0FBREEsT0FBU0MsQ0FBQyxDQUFEQSxDQUFDLENBQURBLENBQWhCLEtBQU9ELENBQVA7QUFGTztBQUlURSxlQUFLLEVBQUUscUJBQWU7QUFDcEIsZ0JBQUlDLENBQUMsR0FBTDtBQUNBLG1CQUFPQSxDQUFDLElBQUksc0NBQXNDSCxDQUFDLENBQURBLGlCQUFtQkMsQ0FBQyxDQUExRCxLQUFzQ0QsQ0FBdEMsR0FBWjtBQUNEO0FBUFE7QUFISDtBQUxrQixLQUFwQixFQUFWVixPQUFVLENBQVZBO0FBb0JBLFFBQUljLElBQUksR0FBRztBQUNUO0FBQ0FDLGNBQVEsRUFBRSxDQUFDO0FBQ1RELFlBQUksRUFBRSxRQUFRRSxLQUFLLEdBRFYsS0FDSCxDQURHO0FBRVRDLHVCQUFlLEVBQUUsa0JBQWtCQyxRQUFRLENBQVJBLFlBRjFCLEVBRTBCQSxDQUFsQixDQUZSO0FBR1RDLG1CQUFXLEVBQUVELFFBQVEsQ0FBUkEsT0FISjtBQUlURSx3QkFBZ0IsRUFBRUYsUUFBUSxDQUFSQSxPQUpUO0FBS1RHLG1CQUFXLEVBQUU7QUFMSixPQUFEO0FBRkQsS0FBWDtBQVdBeEIsVUFBTSxDQUFOQTtBQXJDTyxHQUtULENBTFMsQ0F3Q1Q7QUFDQTtBQUNBOzs7QUFFQXlCLEdBQUMsQ0FBREEsZ0NBQUMsQ0FBREEsTUFBeUMsWUFBVztBQUNsRCxRQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBZixJQUFlLENBQWY7QUFDQSxRQUFJRSxLQUFLLEdBQUdGLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxNQUFaLHNCQUFZQSxDQUFaO0FBQ0EsUUFBSUcsS0FBSyxHQUFHSCxDQUFDLENBQURBLElBQUMsQ0FBREEsTUFBWixzQkFBWUEsQ0FBWjtBQUNBLFFBQUlJLElBQUksR0FBR0osQ0FBQyxDQUFEQSxJQUFDLENBQURBLE1BQVgscUJBQVdBLENBQVg7QUFFQXhCLFlBQVEsc0JBQXNCb0IsUUFBUSxDQUFSQSxjQUE5QnBCLElBQThCb0IsQ0FBdEIsQ0FBUnBCO0FBTkZ3QjtBQTVDRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wcm9ncmVzcy1jaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgQ2hhcnRzLmluaXQoKVxuXG4gIHZhciBQcm9ncmVzcyA9IGZ1bmN0aW9uKGlkLCB2YWx1ZSwgdG90YWwsIGJhY2tncm91bmRDb2xvciwgdHlwZSA9ICdkb3VnaG51dCcsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDkwLFxuICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICByZXNwb25zaXZlOiBmYWxzZSxcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGN1c3RvbTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgdGl0bGU6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmxhYmVsc1thWzBdLmluZGV4XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0ICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0gKyBcIiU8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAvLyBsYWJlbHM6IFtcIkluLXRpbWVcIiwgXCJPdGhlclwiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbdmFsdWUsIHRvdGFsIC0gdmFsdWVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtiYWNrZ3JvdW5kQ29sb3IsIHNldHRpbmdzLmNvbG9ycy5ncmF5WzUwXV0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gQ3JlYXRlIENoYXJ0cyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwicHJvZ3Jlc3MtY2hhcnRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKVxuICAgIHZhciB2YWx1ZSA9ICQodGhpcykuZGF0YSgncHJvZ3Jlc3MtY2hhcnQtdmFsdWUnKVxuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgncHJvZ3Jlc3MtY2hhcnQtY29sb3InKVxuICAgIHZhciB0b25lID0gJCh0aGlzKS5kYXRhKCdwcm9ncmVzcy1jaGFydC10b25lJylcbiAgICBcbiAgICBQcm9ncmVzcyhlbGVtZW50LCB2YWx1ZSwgMTAwLCBzZXR0aW5ncy5jb2xvcnNbY29sb3JdW3RvbmVdKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==