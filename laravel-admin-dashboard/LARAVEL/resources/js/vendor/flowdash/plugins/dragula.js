(function(){
  'use strict';

  $('[data-toggle="dragula"]').each(function() {
    var element = $(this)
    var options = {
      moves: function(el, source, handle, sibling) {
        return void 0 !== element.data('dragula-moves')
          ? handle.classList.contains(element.data('dragula-moves'))
          : true
      }
    }

    var containers = $(this).data('dragula-containers')
    var elements = []

    if (containers) {
      for (var i = 0; i < containers.length; i++) {
        elements.push(document.querySelector(containers[i]))
      }
    }
    else {
      elements.push(element[0])
    }

    dragula(elements, options)
  })

})()