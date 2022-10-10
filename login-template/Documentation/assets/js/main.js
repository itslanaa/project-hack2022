/*------------------------------------------------------------------
 * Author: Brandio
 * Author URI: http://www.brandio.io/
 * Copyright 2016 Brandio.
 -------------------------------------------------------------------*/
"use strict";
$(document).ready(function(){
    prettyPrint();
    /*
    $(document).on("scroll", onScroll);
    $(window).scroll(function() { 
        $('.menu-holder').css('top', $(this).scrollTop());
    });
    */
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    
    if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
            if($(window).scrollTop() + $(window).height()+45 >= $(document).height()) {
                $('#back-to-top').addClass('atbottom');
            } else {
                $('#back-to-top').removeClass('atbottom');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    }
});
