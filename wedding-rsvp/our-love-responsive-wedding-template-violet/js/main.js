/*
* Template Name: Our Love - Responsive Wedding Template
* Author: LMPixels (Linar Miftakhov)
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.0
*/

(function($) {
"use strict";
    var mainNav = $('.main-nav'); //Main menu selector
    var windowWidth = $(window).width();

    // Hide Mobile menu
    function mobileMenuHide() {
        if (windowWidth < 991) {
            mainNav.addClass('mobile-menu-hide');
        }
    }
    // /Hide Mobile menu

    // Contact form validator
    $(function () {
        $('#rsvp-form').validator();

        $('#rsvp-form').on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                var url = "rsvp_form/rsvp_form.php";

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data)
                    {
                        var messageAlert = 'alert-' + data.type;
                        var messageText = data.message;

                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                        if (messageAlert && messageText) {
                            $('#rsvp-form').find('.messages').html(alertBox);
                            $('#rsvp-form')[0].reset();
                        }
                    }
                });
                return false;
            }
        });
    });
    // /Contact form validator


    $(window).on('load', function() {
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        // Animate page loader
        $(".preloader").fadeOut("slow");

        $.stellar({
            horizontalScrolling: false,
            verticalScrolling: !isMobile.any(),
            verticalOffset: 0,
            horizontalOffset: 0,
            responsive: true
        });
    }).on('resize', function() {
        mobileMenuHide();
    });


    $(document).on('ready', function() {
        mobileMenuHide();

        if (windowWidth > 991) {
            var mainMenuHeight = mainNav.height(),
                headerHeight = $('#header').height(),
                offsetValue = mainMenuHeight + headerHeight + 40;
        } else {
            var headerHeight = $('#header').height(),
                offsetValue = headerHeight;
        }

        /* Page Scroll to id fn call */
        $(".main-nav a").mPageScroll2id({
            layout:"vertical",
            highlightClass: "active-item",
            keepHighlightUntilNext: true,
            scrollSpeed: 880,
            scrollEasing: "easeInOutExpo",
            scrollingEasing: "easeInOutCirc",
            clickedClass: "",
            appendHash: false,
            offset: offsetValue,
            forceSingleHighlight:true
        });

        // Mobile menu
        $("a").on("click", function (e) {
            var link = $(this);
            if (link.hasClass("menu-toggle")) {
                mainNav.toggleClass('mobile-menu-hide');
            } else if (link.children(mainNav)) {
                mobileMenuHide();
            }
        });

        // Lightbox init
        $('.lightbox').magnificPopup({
            type: 'image',
            removalDelay: 300,

            // Class that is added to popup wrapper and background
            // make it unique to apply your CSS animations just to this exact popup
            mainClass: 'mfp-fade',
            image: {
                // options for image content type
                titleSrc: 'title'
            },

            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                      id: 'v=', // String that splits URL in a two parts, second part should be %id%
                      // Or null - full URL will be returned
                      // Or a function that should return %id%, for example:
                      // id: function(url) { return 'parsed id'; }

                      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: '//maps.google.' || 'https://www.google.',
                      src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            },

            callbacks: {
                    markupParse: function(template, values, item) {
                     values.title = item.el.attr('title');
                    }
                },
        });

        $('#count').countdown('2017/09/01', function(event) {
            $(this).html(event.strftime('' + 
                '<div class="count-block days">%D<span class="count-label">day%!d</span></div>' + 
                '<div class="count-block hours">%H<span class="count-label">%!H:hour,hours;</span></div>' + 
                '<div class="count-block minutes">%M<span class="count-label">%!M:minute,minutes;</span></div>' + 
                '<div class="count-block seconds">%S<span class="count-label">%!S:second,seconds;</span></div>'
            ));
        });

        $('.gallery-grid').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });

    });

})(jQuery);
