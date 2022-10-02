(function(){
  'use strict';

  $.fn.select2.defaults.set('theme', 'bootstrap4')

  function templateResult(a) {
    if (!a.id)
      return a.text;
    var e = $(a.element).data("avatar-src");
    return e ? $('<span class="avatar avatar-xs mr-2"><img class="avatar-img rounded-circle" src="' + e + '" alt="' + a.text + '"></span><span>' + a.text + "</span>") : a.text
  }

  $('[data-toggle="select"]').each(function() {
    var element = $(this)
    var options = {
      dropdownParent: element.closest(".modal").length ? element.closest(".modal") : $(document.body),
      minimumResultsForSearch: element.data("minimum-results-for-search"),
      templateResult
    }

    element.select2(options)
  })

})()