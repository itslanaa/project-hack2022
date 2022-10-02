"use strict";

exports.__esModule = true;
exports.initSwiper = initSwiper;
exports.mountSwiper = mountSwiper;

var _core = _interopRequireDefault(require("../../core"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
function initSwiper(swiperParams) {
  return new _core.default(swiperParams);
}

function mountSwiper(_ref, swiperParams) {
  var el = _ref.el,
      nextEl = _ref.nextEl,
      prevEl = _ref.prevEl,
      paginationEl = _ref.paginationEl,
      scrollbarEl = _ref.scrollbarEl,
      swiper = _ref.swiper;

  if ((0, _utils.needsNavigation)(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }

  if ((0, _utils.needsPagination)(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }

  if ((0, _utils.needsScrollbar)(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }

  swiper.init(el);
}