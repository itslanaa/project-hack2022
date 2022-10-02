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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/js/settings/dropdown-dismissable.js":
/*!*************************************************!*\
  !*** ./src/js/settings/dropdown-dismissable.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);

 // import $ from 'jquery'

var DropdownDismissable = function () {
  var NAME = 'dropdownDismissable';
  var DATA_KEY = 'bs.dropdown-dismissable';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var DropdownDismissable = /*#__PURE__*/function () {
    function DropdownDismissable(element) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DropdownDismissable);

      Object.defineProperty(element, NAME, {
        configurable: true,
        writable: false,
        value: this
      });
      this._element = element;
      this._dismiss = element.querySelector('[data-dismiss="dropdown"]');
      this._toggle = element.querySelector('[data-toggle="dropdown"]');

      this._init();

      this._addEventListeners();
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DropdownDismissable, [{
      key: "_init",
      value: function _init() {
        $('.dropdown-menu', this._element).removeClass('show').removeAttr('style');

        if ($(this._element).hasClass('show')) {
          $(this._element).removeClass('show');
          $(this._toggle).dropdown('toggle');
        }

        this._element._closable = false;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        this._dismiss.addEventListener('click', this.dismiss.bind(this));
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        this._dismiss.removeEventListener('click', this.dismiss.bind(this));
      } // Static jQuery Interface

    }, {
      key: "dismiss",
      // Public
      value: function dismiss(event) {
        this._element._closable = true;

        if (!event) {
          $(this._toggle).dropdown('toggle');
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventListeners();

        $.removeData(this._element, DATA_KEY);
        $(this._element).dropdown('dispose');
        this._element = null;
      }
    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DropdownDismissable(this);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return DropdownDismissable;
  }();

  $(document).on({
    'show.bs.dropdown': function showBsDropdown() {
      this._closable = false;
    },
    'hide.bs.dropdown': function hideBsDropdown() {
      return this._closable === undefined || this._closable !== false;
    }
  }, '[data-dropdown-dismissable]'); ////////////
  // jQuery //
  ////////////

  $.fn[NAME] = DropdownDismissable._jQueryInterface;
  $.fn[NAME].Constructor = DropdownDismissable;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return DropdownDismissable._jQueryInterface;
  }; ////////////////
  // Initialize //
  ////////////////


  $('[data-dropdown-dismissable]').dropdownDismissable();
  return DropdownDismissable;
}($);

/* harmony default export */ __webpack_exports__["default"] = (DropdownDismissable);

/***/ }),

/***/ 28:
/*!*******************************************************!*\
  !*** multi ./src/js/settings/dropdown-dismissable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demi/Documents/GitHub/admin-flowdash/src/js/settings/dropdown-dismissable.js */"./src/js/settings/dropdown-dismissable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NldHRpbmdzL2Ryb3Bkb3duLWRpc21pc3NhYmxlLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duRGlzbWlzc2FibGUiLCJOQU1FIiwiREFUQV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiT2JqZWN0IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImVsZW1lbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FB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Q0FBQyxDQUE3QixDQUE2QixDQUE3Qjs7QUF3R0Esb0YiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2Ryb3Bkb3duLWRpc21pc3NhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuY29uc3QgRHJvcGRvd25EaXNtaXNzYWJsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdkcm9wZG93bkRpc21pc3NhYmxlJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMuZHJvcGRvd24tZGlzbWlzc2FibGUnXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjbGFzcyBEcm9wZG93bkRpc21pc3NhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgTkFNRSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLl9kaXNtaXNzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNtaXNzPVwiZHJvcGRvd25cIl0nKVxuICAgICAgdGhpcy5fdG9nZ2xlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpXG4gICAgICB0aGlzLl9pbml0KClcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICQoJy5kcm9wZG93bi1tZW51JywgdGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKVxuICAgICAgICAkKHRoaXMuX3RvZ2dsZSkuZHJvcGRvd24oJ3RvZ2dsZScpXG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50Ll9jbG9zYWJsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fZGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcy5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX2Rpc21pc3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc21pc3MuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWMgalF1ZXJ5IEludGVyZmFjZVxuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd25EaXNtaXNzYWJsZSh0aGlzKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUHVibGljXG5cbiAgICBkaXNtaXNzKGV2ZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Ll9jbG9zYWJsZSA9IHRydWVcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl90b2dnbGUpLmRyb3Bkb3duKCd0b2dnbGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpXG5cbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkuZHJvcGRvd24oJ2Rpc3Bvc2UnKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgJ3Nob3cuYnMuZHJvcGRvd24nOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2Nsb3NhYmxlID0gZmFsc2VcbiAgICB9LFxuICAgICdoaWRlLmJzLmRyb3Bkb3duJzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9jbG9zYWJsZSAhPT0gZmFsc2VcbiAgICB9XG4gIH0sICdbZGF0YS1kcm9wZG93bi1kaXNtaXNzYWJsZV0nKVxuXG4gIC8vLy8vLy8vLy8vL1xuICAvLyBqUXVlcnkgLy9cbiAgLy8vLy8vLy8vLy8vXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IERyb3Bkb3duRGlzbWlzc2FibGUuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25EaXNtaXNzYWJsZVxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gRHJvcGRvd25EaXNtaXNzYWJsZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEluaXRpYWxpemUgLy9cbiAgLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgJCgnW2RhdGEtZHJvcGRvd24tZGlzbWlzc2FibGVdJykuZHJvcGRvd25EaXNtaXNzYWJsZSgpXG5cbiAgcmV0dXJuIERyb3Bkb3duRGlzbWlzc2FibGVcblxufSkoJClcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25EaXNtaXNzYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=