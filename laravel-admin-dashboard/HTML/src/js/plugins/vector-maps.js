(function(){
  'use strict';

  JQVMap.prototype.resizeContainer = function () {
    this.width = this.container.width()
    this.height = this.container.height()
    this.resize()
    this.canvas.setSize(this.width, this.height)
    this.applyTransform()
    this.positionPins()
  }

  JQVMap.prototype.setFocus = function (codes, animate = true) {
    if (typeof codes === 'string') {
      codes = [codes]
    }

    var map = this
    var coords, newCoords;

    codes.forEach(cc => {
      var el = $('#' + this.getCountryId(cc))
      var path = el[0]
      var bbox = path.getBBox()

      if (typeof coords == 'undefined') {
        coords = bbox
      }
      else {
        newCoords = {
          x: Math.min(coords.x, bbox.x),
          y: Math.min(coords.y, bbox.y),
          width: Math.max(coords.x + coords.width, bbox.x + bbox.width) - Math.min(coords.x, bbox.x),
          height: Math.max(coords.y + coords.height, bbox.y + bbox.height) - Math.min(coords.y, bbox.y)
        }
        coords = newCoords
      }
    })

    var scale = Math.min(this.width / coords.width, this.height / coords.height)

    if (scale > this.zoomMaxStep * this.baseScale) {
      scale = this.zoomMaxStep * this.baseScale
    }
    else if (scale < this.baseScale) {
      scale = this.baseScale
    }

    var zoomStep = scale / this.scale
    this.zoomCurStep = this.zoomCurStep * Math.round(zoomStep)

    var cX = coords.x * scale
    var cY = coords.y * scale

    var middleX = coords.width / 2
    var middleY = coords.height / 2

    var anchorX = (cX - middleX) / scale * -1
    var anchorY = (cY - middleY) / scale * -1
    
    var transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2
    var transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2

    var count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))) || 30
    
    if (animate) {
      var i = 0,
          scaleStart,
          scaleDiff,
          transXStart,
          transXDiff,
          transYStart,
          transYDiff

      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;

      function frame() {
        i += 1
        map.scale = scaleStart + scaleDiff * i
        map.transX = (transXStart + transXDiff * i) / map.scale
        map.transY = (transYStart + transYDiff * i) / map.scale
        map.applyTransform()
        map.positionPins()
        
        if (i < count) {
          requestAnimationFrame(frame) 
        }
      }

      requestAnimationFrame(frame)
    }
    else {
      this.transX = transX
      this.transY = transY
      this.setScale(scale)
      this.positionPins()
    }
  }

  function escapeXml(string) {
    return string.replace(/[<>]/g, function (c) {
      switch (c) {
        case '<': return '\u003c';
        case '>': return '\u003e';
      }
    });
  }

  function resizeContainer() {
    $('[data-toggle="vector-map"]').each(function() {
      const element = $(this)
      const map = element.data().mapObject
      map.resizeContainer()
      
      const focus = element.data('vector-map-focus')
      if (focus) {
        map.setFocus(focus)
      }
    })
  }

  $('[data-toggle="vector-map"]').each(function() {
    var element = $(this)
    var values = element.data('vector-map-values') ? maps[element.data('vector-map-values')] || {} : {}
    let pins = {}

    try {
      pins = element.data('vector-map-pins')
      for (var key in pins) {
        if (pins.hasOwnProperty(key)) {
          pins[key] = escapeXml(pins[key])
        }
      }
    }
    catch(e) {}

    var options = {
      map: element.data('vector-map-map'),
      zoomOnScroll: void 0 !== element.data('vector-map-zoom-on-scroll') 
        ? element.data('vector-map-zoom-on-scroll') 
        : false,
      enableZoom: void 0 !== element.data('vector-map-enable-zoom') 
        ? element.data('vector-map-enable-zoom') 
        : false,
      showTooltip: void 0 !== element.data('vector-map-show-tooltip') 
        ? element.data('vector-map-show-tooltip') 
        : true,
      focusOnSelect: void 0 !== element.data('vector-map-focus-on-select') 
        ? element.data('vector-map-focus-on-select') 
        : false,
      backgroundColor: void 0 !== element.data('vector-map-background-color') 
        ? element.data('vector-map-background-color') 
        : 'transparent',
      values,
      color: settings.colors.gray[50],
      selectedColor: settings.colors.primary[300],
      hoverColor: settings.colors.primary[100],
      scaleColors: [ settings.colors.primary[50], settings.colors.primary[500] ],
      borderWidth: 1,
      borderColor: '#ffffff',
      borderOpacity: 1,
      normalizeFunction: 'polynomial',
      colors: {},
      pins,
      pinMode: 'content',
      onLabelShow: function (e, label, code) {
        label.html(label.html() + ' - ' + values[ code ])
      },
      onRegionSelect: function(event, code, region) {
        if (options.focusOnSelect) {
          map.setFocus(code)
        }
      }
    }

    var colors = element.data('vector-map-values-colors')
    if (colors) {
      for (var key in values) {
        if (values.hasOwnProperty(key) && colors[values[key]] !== undefined) {
          const color = colors[values[key]]
          options.colors[key] = settings.colors.get(color) || color
        }
      }
    }

    element.vectorMap(options)

    const map = $(this).data().mapObject

    if (Object.keys(options.colors)) {
      map.setColors(options.colors)
    }

    const scale = element.data('vector-map-scale')
    const focus = element.data('vector-map-focus')

    if (scale) {
      map.setScale(scale)
      map.positionPins()
    }
    else if (focus) {
      map.setFocus(focus)
    }
  })

  $('[data-toggle=vector-map-focus]').on('click', function(e) {
    e.preventDefault()

    const element = $(this)
    const target = $(element.data('target'))
    if (!target) {
      return
    }

    const map = target.data().mapObject
    const focus = element.data('focus')
    const animate = element.data('animate')

    if (focus) {
      map.setFocus(focus, animate)
    }
  })

  const drawer = document.querySelector('.mdk-drawer')
  if (drawer) {
    drawer.addEventListener('mdk-drawer-change', () => requestAnimationFrame(resizeContainer))
  }

})()