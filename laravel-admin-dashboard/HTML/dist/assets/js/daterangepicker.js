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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/daterangepicker.js":
/*!*******************************************!*\
  !*** ./src/js/plugins/daterangepicker.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="daterangepicker"]').each(function () {
    var element = $(this);
    var format = void 0 !== element.data('daterangepicker-locale-format') ? element.data('daterangepicker-locale-format') : 'YYYY/MM/DD';
    var ranges = {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    var options = {
      showDropdowns: void 0 !== element.data('daterangepicker-show-dropdowns') ? element.data('daterangepicker-show-dropdowns') : false,
      drops: void 0 !== element.data('daterangepicker-drops') ? element.data('daterangepicker-drops') : 'down',
      opens: void 0 !== element.data('daterangepicker-opens') ? element.data('daterangepicker-opens') : 'right',
      startDate: void 0 !== element.data('daterangepicker-start-date') ? element.data('daterangepicker-start-date') : moment(),
      endDate: void 0 !== element.data('daterangepicker-end-date') ? element.data('daterangepicker-end-date') : moment().add(1, 'month'),
      singleDatePicker: void 0 !== element.data('daterangepicker-single-date-picker') ? element.data('daterangepicker-single-date-picker') : false,
      autoApply: void 0 !== element.data('daterangepicker-auto-apply') ? element.data('daterangepicker-auto-apply') : true,
      timePicker: void 0 !== element.data('daterangepicker-time-picker') ? element.data('daterangepicker-time-picker') : false,
      timePicker24Hour: void 0 !== element.data('daterangepicker-time-picker-24-hour') ? element.data('daterangepicker-time-picker-24-hour') : false,
      ranges: void 0 !== element.data('daterangepicker-ranges') ? ranges : false,
      locale: {
        format: format,
        separator: void 0 !== element.data('daterangepicker-locale-separator') ? element.data('daterangepicker-locale-separator') : ' to '
      }
    };
    element.daterangepicker(options);
  });
})();

/***/ }),

/***/ 13:
/*!*************************************************!*\
  !*** multi ./src/js/plugins/daterangepicker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demi/Documents/GitHub/admin-flowdash/src/js/plugins/daterangepicker.js */"./src/js/plugins/daterangepicker.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvZGF0ZXJhbmdlcGlja2VyLmpzIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50IiwiZm9ybWF0IiwicmFuZ2VzIiwibW9tZW50Iiwib3B0aW9ucyIsInNob3dEcm9wZG93bnMiLCJkcm9wcyIsIm9wZW5zIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInNpbmdsZURhdGVQaWNrZXIiLCJhdXRvQXBwbHkiLCJ0aW1lUGlja2VyIiwidGltZVBpY2tlcjI0SG91ciIsImxvY2FsZSIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBVTtBQUNUOztBQUVBQSxHQUFDLENBQURBLGlDQUFDLENBQURBLE1BQTBDLFlBQVc7QUFDbkQsUUFBTUMsT0FBTyxHQUFHRCxDQUFDLENBQWpCLElBQWlCLENBQWpCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHLFdBQVdELE9BQU8sQ0FBUEEsS0FBWCwrQkFBV0EsQ0FBWCxHQUNYQSxPQUFPLENBQVBBLEtBRFcsK0JBQ1hBLENBRFcsR0FBZjtBQUlBLFFBQU1FLE1BQU0sR0FBRztBQUNiLGVBQVMsQ0FBQ0MsTUFBRCxJQUFXQSxNQURQLEVBQ0osQ0FESTtBQUViLG1CQUFhLENBQUNBLE1BQU0sR0FBTkEsWUFBRCxNQUFDQSxDQUFELEVBQStCQSxNQUFNLEdBQU5BLFlBRi9CLE1BRStCQSxDQUEvQixDQUZBO0FBR2IscUJBQWUsQ0FBQ0EsTUFBTSxHQUFOQSxZQUFELE1BQUNBLENBQUQsRUFBK0JBLE1BSGpDLEVBR0UsQ0FIRjtBQUliLHNCQUFnQixDQUFDQSxNQUFNLEdBQU5BLGFBQUQsTUFBQ0EsQ0FBRCxFQUFnQ0EsTUFKbkMsRUFJRyxDQUpIO0FBS2Isb0JBQWMsQ0FBQ0EsTUFBTSxHQUFOQSxRQUFELE9BQUNBLENBQUQsRUFBNEJBLE1BQU0sR0FBTkEsTUFMN0IsT0FLNkJBLENBQTVCLENBTEQ7QUFNYixvQkFBYyxDQUFDQSxNQUFNLEdBQU5BLDZCQUFELE9BQUNBLENBQUQsRUFBaURBLE1BQU0sR0FBTkEsMkJBQWpELE9BQWlEQSxDQUFqRDtBQU5ELEtBQWY7QUFTQSxRQUFNQyxPQUFPLEdBQUc7QUFDZEMsbUJBQWEsRUFBRSxXQUFXTCxPQUFPLENBQVBBLEtBQVgsZ0NBQVdBLENBQVgsR0FDWEEsT0FBTyxDQUFQQSxLQURXLGdDQUNYQSxDQURXLEdBREQ7QUFJZE0sV0FBSyxFQUFFLFdBQVdOLE9BQU8sQ0FBUEEsS0FBWCx1QkFBV0EsQ0FBWCxHQUNIQSxPQUFPLENBQVBBLEtBREcsdUJBQ0hBLENBREcsR0FKTztBQU9kTyxXQUFLLEVBQUUsV0FBV1AsT0FBTyxDQUFQQSxLQUFYLHVCQUFXQSxDQUFYLEdBQ0hBLE9BQU8sQ0FBUEEsS0FERyx1QkFDSEEsQ0FERyxHQVBPO0FBVWRRLGVBQVMsRUFBRSxXQUFXUixPQUFPLENBQVBBLEtBQVgsNEJBQVdBLENBQVgsR0FDUEEsT0FBTyxDQUFQQSxLQURPLDRCQUNQQSxDQURPLEdBRVBHLE1BWlU7QUFhZE0sYUFBTyxFQUFFLFdBQVdULE9BQU8sQ0FBUEEsS0FBWCwwQkFBV0EsQ0FBWCxHQUNMQSxPQUFPLENBQVBBLEtBREssMEJBQ0xBLENBREssR0FFTEcsTUFBTSxHQUFOQSxPQWZVLE9BZVZBLENBZlU7QUFnQmRPLHNCQUFnQixFQUFFLFdBQVdWLE9BQU8sQ0FBUEEsS0FBWCxvQ0FBV0EsQ0FBWCxHQUNkQSxPQUFPLENBQVBBLEtBRGMsb0NBQ2RBLENBRGMsR0FoQko7QUFtQmRXLGVBQVMsRUFBRSxXQUFXWCxPQUFPLENBQVBBLEtBQVgsNEJBQVdBLENBQVgsR0FDUEEsT0FBTyxDQUFQQSxLQURPLDRCQUNQQSxDQURPLEdBbkJHO0FBc0JkWSxnQkFBVSxFQUFFLFdBQVdaLE9BQU8sQ0FBUEEsS0FBWCw2QkFBV0EsQ0FBWCxHQUNSQSxPQUFPLENBQVBBLEtBRFEsNkJBQ1JBLENBRFEsR0F0QkU7QUF5QmRhLHNCQUFnQixFQUFFLFdBQVdiLE9BQU8sQ0FBUEEsS0FBWCxxQ0FBV0EsQ0FBWCxHQUNkQSxPQUFPLENBQVBBLEtBRGMscUNBQ2RBLENBRGMsR0F6Qko7QUE0QmRFLFlBQU0sRUFBRSxXQUFXRixPQUFPLENBQVBBLEtBQVgsd0JBQVdBLENBQVgsWUE1Qk07QUErQmRjLFlBQU0sRUFBRTtBQUNOYixjQUFNLEVBREE7QUFFTmMsaUJBQVMsRUFBRSxXQUFXZixPQUFPLENBQVBBLEtBQVgsa0NBQVdBLENBQVgsR0FDUEEsT0FBTyxDQUFQQSxLQURPLGtDQUNQQSxDQURPLEdBRVA7QUFKRTtBQS9CTSxLQUFoQjtBQXVDQUEsV0FBTyxDQUFQQTtBQXRERkQ7QUFIRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9kYXRlcmFuZ2VwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiZGF0ZXJhbmdlcGlja2VyXCJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gJCh0aGlzKVxuICAgIGNvbnN0IGZvcm1hdCA9IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItbG9jYWxlLWZvcm1hdCcpIFxuICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1sb2NhbGUtZm9ybWF0JykgXG4gICAgICA6ICdZWVlZL01NL0REJ1xuXG4gICAgY29uc3QgcmFuZ2VzID0ge1xuICAgICAgJ1RvZGF5JzogW21vbWVudCgpLCBtb21lbnQoKV0sXG4gICAgICAnWWVzdGVyZGF5JzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxuICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcbiAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudCgpXSxcbiAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXSxcbiAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzaG93RHJvcGRvd25zOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXNob3ctZHJvcGRvd25zJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc2hvdy1kcm9wZG93bnMnKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRyb3BzOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWRyb3BzJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZHJvcHMnKSBcbiAgICAgICAgOiAnZG93bicsXG4gICAgICBvcGVuczogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1vcGVucycpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLW9wZW5zJykgXG4gICAgICAgIDogJ3JpZ2h0JyxcbiAgICAgIHN0YXJ0RGF0ZTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zdGFydC1kYXRlJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc3RhcnQtZGF0ZScpXG4gICAgICAgIDogbW9tZW50KCksXG4gICAgICBlbmREYXRlOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWVuZC1kYXRlJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZW5kLWRhdGUnKVxuICAgICAgICA6IG1vbWVudCgpLmFkZCgxLCAnbW9udGgnKSxcbiAgICAgIHNpbmdsZURhdGVQaWNrZXI6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc2luZ2xlLWRhdGUtcGlja2VyJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc2luZ2xlLWRhdGUtcGlja2VyJykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBhdXRvQXBwbHk6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItYXV0by1hcHBseScpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWF1dG8tYXBwbHknKSBcbiAgICAgICAgOiB0cnVlLFxuICAgICAgdGltZVBpY2tlcjogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci10aW1lLXBpY2tlcicpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyJykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICB0aW1lUGlja2VyMjRIb3VyOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyLTI0LWhvdXInKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci10aW1lLXBpY2tlci0yNC1ob3VyJykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICByYW5nZXM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzJykgXG4gICAgICAgID8gcmFuZ2VzIFxuICAgICAgICA6IGZhbHNlLFxuICAgICAgbG9jYWxlOiB7XG4gICAgICAgIGZvcm1hdCxcbiAgICAgICAgc2VwYXJhdG9yOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWxvY2FsZS1zZXBhcmF0b3InKSBcbiAgICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWxvY2FsZS1zZXBhcmF0b3InKSBcbiAgICAgICAgICA6ICcgdG8gJyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmRhdGVyYW5nZXBpY2tlcihvcHRpb25zKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==