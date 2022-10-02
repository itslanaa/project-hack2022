import './preloader'
import './sidebar'
import './perfect-scrollbar'

(function(){
  'use strict';
  
  // Self Initialize DOM Factory Components
  domFactory.handler.autoInit()

  // ENABLE TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip()

})()