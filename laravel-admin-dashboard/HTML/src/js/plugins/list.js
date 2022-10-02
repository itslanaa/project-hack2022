(function(){
  'use strict';

  $('[data-toggle="lists"]').each(function() {
    var element = $(this)
    var options = {
      valueNames: void 0 !== element.data('lists-values') 
        ? element.data('lists-values') 
        : [],
      listClass: void 0 !== element.data('lists-class') 
        ? element.data('lists-class') 
        : 'list'
    }

    var listElement = element.get(0)
    var list = new List(listElement, options)

    Object.defineProperty(listElement, 'List', {
      configurable: true,
      writable: false,
      value: list
    })
  })

})()