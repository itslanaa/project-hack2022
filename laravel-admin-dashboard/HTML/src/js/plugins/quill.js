(function(){
  'use strict';

  $('[data-toggle="quill"]').each(function() {
    var element = $(this)
    var options = {
      modules: {
        toolbar: void 0 !== element.data('quill-modules-toolbar') 
        ? element.data('quill-modules-toolbar') 
        : {}
      },
      theme: void 0 !== element.data('quill-theme') 
        ? element.data('quill-theme') 
        : 'snow',
      placeholder: void 0 !== element.data('quill-placeholder') 
        ? element.data('quill-placeholder') 
        : Quill.DEFAULTS.placeholder,
      readOnly: void 0 !== element.data('quill-read-only')
        ? element.data('quill-read-only')
        : Quill.DEFAULTS.readOnly,
      debug: void 0 !== element.data('quill-debug')
        ? element.data('quill-debug')
        : Quill.DEFAULTS.debug,
      formats: void 0 !== element.data('quill-formats')
        ? element.data('quill-formats')
        : Quill.DEFAULTS.formats
    }

    var quillElement = element.get(0)
    var quill = new Quill(quillElement, options)
    Object.defineProperty(quillElement, 'Quill', {
      configurable: true,
      writable: false,
      value: quill
    })
  })

})()