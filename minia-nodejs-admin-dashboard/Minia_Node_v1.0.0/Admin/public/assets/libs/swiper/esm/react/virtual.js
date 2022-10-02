import React from 'react';

function updateOnVirtualData(swiper) {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
}

function renderVirtual(swiper, slides, virtualData) {
  var _ref;

  if (!virtualData) return null;
  var style = swiper.isHorizontal() ? (_ref = {}, _ref[swiper.rtlTranslate ? 'right' : 'left'] = virtualData.offset + "px", _ref) : {
    top: virtualData.offset + "px"
  };
  return slides.filter(function (child, index) {
    return index >= virtualData.from && index <= virtualData.to;
  }).map(function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      swiper: swiper,
      style: style
    });
  });
}

export { renderVirtual, updateOnVirtualData };