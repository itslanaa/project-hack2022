var _excluded = ["className", "tag", "wrapperTag", "children", "onSwiper"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { getParams } from './get-params';
import { initSwiper, mountSwiper } from './init-swiper';
import { needsScrollbar, needsNavigation, needsPagination, uniqueClasses, extend } from './utils';
import { renderLoop, calcLoopedSlides } from './loop';
import { getChangedParams } from './get-changed-params';
import { getChildren } from './get-children';
import { updateSwiper } from './update-swiper';
import { renderVirtual, updateOnVirtualData } from './virtual';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
var Swiper = /*#__PURE__*/forwardRef(function (_temp, externalElRef) {
  var _ref = _temp === void 0 ? {} : _temp,
      className = _ref.className,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      _ref$wrapperTag = _ref.wrapperTag,
      WrapperTag = _ref$wrapperTag === void 0 ? 'div' : _ref$wrapperTag,
      children = _ref.children,
      onSwiper = _ref.onSwiper,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var eventsAssigned = false;

  var _useState = useState('swiper-container'),
      containerClasses = _useState[0],
      setContainerClasses = _useState[1];

  var _useState2 = useState(null),
      virtualData = _useState2[0],
      setVirtualData = _useState2[1];

  var _useState3 = useState(false),
      breakpointChanged = _useState3[0],
      setBreakpointChanged = _useState3[1];

  var initializedRef = useRef(false);
  var swiperElRef = useRef(null);
  var swiperRef = useRef(null);
  var oldPassedParamsRef = useRef(null);
  var oldSlides = useRef(null);
  var nextElRef = useRef(null);
  var prevElRef = useRef(null);
  var paginationElRef = useRef(null);
  var scrollbarElRef = useRef(null);

  var _getParams = getParams(rest),
      swiperParams = _getParams.params,
      passedParams = _getParams.passedParams,
      restProps = _getParams.rest,
      events = _getParams.events;

  var _getChildren = getChildren(children),
      slides = _getChildren.slides,
      slots = _getChildren.slots;

  var onBeforeBreakpoint = function onBeforeBreakpoint() {
    setBreakpointChanged(!breakpointChanged);
  };

  Object.assign(swiperParams.on, {
    _containerClasses: function _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }
  });

  if (!swiperElRef.current) {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    swiperRef.current = initSwiper(swiperParams);

    swiperRef.current.loopCreate = function () {};

    swiperRef.current.loopDestroy = function () {};

    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = calcLoopedSlides(slides, swiperParams);
    }

    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      var extendWith = {
        cache: false,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      extend(swiperRef.current.params.virtual, extendWith);
      extend(swiperRef.current.originalParams.virtual, extendWith);
    }
  } // Listen for breakpoints change


  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }

  var attachEvents = function attachEvents() {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(function (eventName) {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };

  var detachEvents = function detachEvents() {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(function (eventName) {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };

  useEffect(function () {
    return function () {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  }); // set initialized flag

  useEffect(function () {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  }); // mount swiper

  useIsomorphicLayoutEffect(function () {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }

    if (!swiperElRef.current) return;
    mountSwiper({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line

    return function () {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []); // watch for params change

  useIsomorphicLayoutEffect(function () {
    attachEvents();
    var changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;

    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper({
        swiper: swiperRef.current,
        slides: slides,
        passedParams: passedParams,
        changedParams: changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }

    return function () {
      detachEvents();
    };
  }); // update on virtual update

  useIsomorphicLayoutEffect(function () {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]); // bypass swiper instance to slides

  function renderSlides() {
    if (swiperParams.virtual) {
      return renderVirtual(swiperRef.current, slides, virtualData);
    }

    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(function (child) {
        return /*#__PURE__*/React.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }

    return renderLoop(swiperRef.current, slides, swiperParams);
  }

  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: swiperElRef,
    className: uniqueClasses("" + containerClasses + (className ? " " + className : ''))
  }, restProps), slots['container-start'], needsNavigation(swiperParams) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/React.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && /*#__PURE__*/React.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && /*#__PURE__*/React.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), /*#__PURE__*/React.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), slots['container-end']);
});
Swiper.displayName = 'Swiper';
export { Swiper };