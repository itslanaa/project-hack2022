(function ($) {

    "use strict";

    $(document).ready(function () {

        var $window = $(window);

        /*-----------------------------------------------------------------------------------*/
        /*	Mean Menu
         /*-----------------------------------------------------------------------------------*/
        $(".main-menu").meanmenu({
            meanScreenWidth: "991",
            meanRevealPosition: "left"
        });

        /*-----------------------------------------------------------------------------------*/
        /*	HoverDir
         /*-----------------------------------------------------------------------------------*/
        $(".item-box > a").each(function () {
            $(this).hoverdir();
        });

        /*-----------------------------------------------------------------*/
        /* Message close
         /*-----------------------------------------------------------------*/
        $('.message .close').on('click', function (e) {
            $(this).closest('.message').fadeOut();
        });

        /*-----------------------------------------------------------------------------------*/
        /*	Why Choose section prepend
         /*-----------------------------------------------------------------------------------*/
        $('.quality-inner').parents(".qualities-box").find(".wrapper-qualities").html($(".quality-inner").detach());
        $('.image-wrapper').parents(".qualities-box").find(".right-items").html($(".image-wrapper").detach());

        //inc dec buttons in shop cart product quantity
        $('.shipping-calculator-form').show();

        /*-----------------------------------------------------------------------------------*/
        /*	Image Lightbox
         /*  http://osvaldas.info/image-lightbox-responsive-touch-friendly
         /*-----------------------------------------------------------------------------------*/
        if (jQuery().imageLightbox) {

            // ACTIVITY INDICATOR

            var activityIndicatorOn = function () {
                    $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
                },
                activityIndicatorOff = function () {
                    $('#imagelightbox-loading').remove();
                },


                // OVERLAY

                overlayOn = function () {
                    $('<div id="imagelightbox-overlay"></div>').appendTo('body');
                },
                overlayOff = function () {
                    $('#imagelightbox-overlay').remove();
                },


                // CLOSE BUTTON

                closeButtonOn = function (instance) {
                    $('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function () {
                        $(this).remove();
                        instance.quitImageLightbox();
                        return false;
                    });
                },
                closeButtonOff = function () {
                    $('#imagelightbox-close').remove();
                },

                // ARROWS

                arrowsOn = function (instance, selector) {
                    var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>');

                    $arrows.appendTo('body');

                    $arrows.on('click touchend', function (e) {
                        e.preventDefault();

                        var $this = $(this),
                            $target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
                            index = $target.index(selector);

                        if ($this.hasClass('imagelightbox-arrow-left')) {
                            index = index - 1;
                            if (!$(selector).eq(index).length)
                                index = $(selector).length;
                        }
                        else {
                            index = index + 1;
                            if (!$(selector).eq(index).length)
                                index = 0;
                        }

                        instance.switchImageLightbox(index);
                        return false;
                    });
                },
                arrowsOff = function () {
                    $('.imagelightbox-arrow').remove();
                };

            // Lightbox for individual image
            var lightboxInstance = $('a[data-imagelightbox="lightbox"]').imageLightbox({
                onStart: function () {
                    overlayOn();
                    closeButtonOn(lightboxInstance);
                },
                onEnd: function () {
                    closeButtonOff();
                    overlayOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                }
            });

            // Lightbox for product gallery
            var gallerySelector = 'a[data-imagelightbox="gallery"]';
            var galleryInstance = $(gallerySelector).imageLightbox({
                quitOnDocClick: false,
                onStart: function () {
                    overlayOn();
                    closeButtonOn(galleryInstance);
                    arrowsOn(galleryInstance, gallerySelector);
                },
                onEnd: function () {
                    overlayOff();
                    closeButtonOff();
                    arrowsOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    activityIndicatorOff();
                    $('.imagelightbox-arrow').css('display', 'block');
                }
            });

        }

        /*-----------------------------------------------------------------------------------*/
        /*	Project Single Post Nav
         /*-----------------------------------------------------------------------------------*/
        var w1 = $('.project-left-content-box').width();
        $('.project-post-nav').css('max-width', w1 + "px");

        $window.on('resize', function () {
            var w1 = $('.project-left-content-box').width();
            $('.project-post-nav').css('max-width', w1 + "px");
        });

        /*-----------------------------------------------------------------------------------*/
        /*	Sticky Header
         /*-----------------------------------------------------------------------------------*/
        if ($window.width() > 991) {

            $window.on('scroll', function () {
                var headerHeight = $('.main-header').height();
                var navHeight = $('.header-nav-section').height();

                var headerWithoutNav = headerHeight - navHeight;
                $("header.main-header").css({'height': ( headerHeight + 'px')});
                if ($(this).scrollTop() > headerWithoutNav) {
                    $('.bp-sticky-menu').addClass("bp-sticky-header");
                }
                else {
                    $('.bp-sticky-menu').removeClass("bp-sticky-header");
                }
                if ($(this).scrollTop() > headerHeight) {
                    $('.bp-sticky-menu-2').addClass("bp-sticky-header");
                } else {
                    $('.bp-sticky-menu-2').removeClass("bp-sticky-header");
                }
            });

            $window.on('scroll', function () {
                var headerNavTop = $('.header-nav-top').height();
                $(".wrapper-header-nav-top").css({'height': ( headerNavTop + 'px')});
                if ($(this).scrollTop() > 1) {
                    $('.bp-sticky-menu-3').addClass("bp-sticky-header");
                }
            });
        }

        $window.on('load', function () {

            /*-----------------------------------------------------------------------------------*/
            /*	Page Loader
             /*-----------------------------------------------------------------------------------*/
            setTimeout(function () {
                $(".uil-flickr-css").fadeOut();
                $(".page-pre-load").delay(200).fadeOut("slow").delay(200, function () {
                    $(this).remove();
                })
            }, 500);

            /*-----------------------------------------------------------------------------------*/
            /*	select 2
             /*-----------------------------------------------------------------------------------*/
            $('select').select2();

            /*-----------------------------------------------------------------------------------*/
            /*	owl carousel
             /*-----------------------------------------------------------------------------------*/
            // Home Slider
            $('.main-slider').owlCarousel({
                autoplayHoverPause: true,
                loop: true,
                autoplay: true,
                smartSpeed: 1000,
                mouseDrag: true,
                items: 1,
            });

            // portfolio slider
            $('#portfolio-slider-owl').owlCarousel({
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                mouseDrag: false,
                items: 1,
                dotsData: true,
                dotsContainer: '#customDots',

            });

            //portfolio slider inner
            $('.inner-slider-owl').owlCarousel({
                //navigation: true, // Show next and prev buttons
                items: 3,
                nav: true,
                dots: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                margin: 30,
                navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1,
                    },
                    // breakpoint from 480 up
                    500: {
                        items: 2,
                    },
                    // breakpoint from 768 up
                    900: {
                        items: 3,

                    }
                }
            });

            // Testimonials Slider
            $('.testimonials-slider').owlCarousel({
                //autoplayHoverPause: true,
                margin: 30,
                loop: true,
                autoplay: false,
                dots: true,
                smartSpeed: 500,
                nav: false,
                mouseDrag: true,
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                    },
                    756: {
                        items: 2,
                    },

                }
            });

            // related product Slider (woocommerce)
            $('#product-carousel-wc').owlCarousel({
                //autoplayHoverPause: true,
                margin: 30,
                loop: false,
                autoplay: false,
                dots: true,
                smartSpeed: 500,
                nav: false,
                mouseDrag: true,
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                    },
                    500: {
                        items: 2,
                    },
                    900: {
                        items: 4,

                    }
                }
            });

            // upsells Slider (woocommerce)
            $('#carousel-upsells').owlCarousel({
                //autoplayHoverPause: true,
                margin: 30,
                loop: false,
                autoplay: false,
                dots: true,
                smartSpeed: 500,
                nav: false,
                mouseDrag: true,
                items: 2,
                responsive: {
                    0: {
                        items: 1,
                    },
                    500: {
                        items: 2,
                    },
                    900: {
                        items: 4,

                    }
                }
            });

            // Partner Slider
            $('.slider-partners').owlCarousel({
                margin: 50,
                //loop: true,
                autoplay: false,
                dots: false,
                smartSpeed: 500,
                nav: false,
                mouseDrag: true,
                items: 6,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    756: {
                        items: 4,
                    },
                    1000: {
                        items: 5,
                    },
                    1200: {
                        items: 6,
                    }

                }
            });

            // Featured Slider
            $(".slider-featured").each(function () {
                $(this).owlCarousel({
                    autoplayHoverPause: true,
                    loop: true,
                    autoplay: true,
                    dots: false,
                    //smartSpeed: 1000,
                    nav: true,
                    mouseDrag: true,
                    items: 2,
                    navText: ["<i class='left-arrow-featured'></i>", "<i class='right-arrow-featured'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    }
                })
            });

            $(".inner-slider-owl-new").each(function () {
                var slidePerView = $(this).data("slides-per-view");
                $(this).owlCarousel({
                    items: slidePerView,
                    nav: true,
                    dots: false,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    margin: 30,
                    navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
                })
            });

            //carousel for VC
            $(".inspiry-carousel").each(function () {
                var itemsPerView = $(this).data("items-per-view");
                var loop = $(this).data("loop");
                var autoplay = $(this).data("autoplay");
                var margin = $(this).data("margin");
                $(this).owlCarousel({
                    margin: margin,
                    loop: loop,
                    autoplay: autoplay,
                    items: itemsPerView,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        992: {
                            items: itemsPerView,
                        }
                    }
                });
            });

            // Project Detail Slider
            $('.slider-single-project').owlCarousel({
                loop: true,
                autoplay: false,
                smartSpeed: 1000,
                mouseDrag: true,
                items: 1,
                nav: true,
                navText: ["<div class='left-arrow-slide'></div>", "<div class='right-arrow-slide'></div>"],
                //freeDrag: false,
            });

            /*-----------------------------------------------------------------------------------*/
            /*	Flex Slider
             /*-----------------------------------------------------------------------------------*/
            // Product Page Flex Slider (woocommerce)
            $('.product-slider').flexslider({
                animation: "slide",
                animationLoop: false,
                slideshow: false,
                directionNav: false,
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
                animationSpeed: 250,
                controlNav: "thumbnails"
            });

            /*-----------------------------------------------------------------------------------*/
            /*	Why Choose Us section
             /*-----------------------------------------------------------------------------------*/
            $('.thumb-experience').each(function () {
                var imgWidth = $(this).find("img").width() + 'px';
                var imgHeight = $(this).find("img").height() + 'px';
                $(this).css("max-width", imgWidth);
                $(this).css('max-height', imgHeight);

            });

            $('.thumb-experience img').on('hover', function () {
                var $this = $(this).parent();
                if (!$($this).hasClass('pulse')) {
                    $('.thumb-experience').removeClass('pulse');
                    $($this).addClass('pulse');
                }
            });

            /*-----------------------------------------------------------------------------------*/
            /*	Projects Template Layout
             /*-----------------------------------------------------------------------------------*/
            $(".bp-layout").on("click", function () {
                if ($(this).hasClass("bp-grid")) {
                    if (!$(this).hasClass("bp-active")) {
                        $(".wrapper-projects").fadeOut('fast', function () {
                            $(this).css("display", "flex").addClass("wrapper-projects-grid test");
                        }).fadeIn('fast');
                    }
                    if (!$(this).hasClass("bp-active")) {
                        $(".bp-layout").removeClass("bp-active");
                        $(this).addClass("bp-active");
                    }
                } else {

                    if (!$(this).hasClass("bp-active")) {
                        $(".wrapper-projects").fadeOut('fast', function () {
                            $(this).css("display", "block").removeClass("wrapper-projects-grid");
                        }).fadeIn('fast');
                    }

                    if (!$(this).hasClass("bp-active")) {
                        $(".bp-layout").removeClass("bp-active");
                        $(this).addClass("bp-active");
                    }
                }
            });

            /*-----------------------------------------------------------------------------------*/
            /*	featured section
             /*-----------------------------------------------------------------------------------*/
            $(".featured-section-var2").tabs({
                show: function (event, ui) {
                    var firstOpenedPanel = $(this).data("firstOpenedPanel");
                    if (!$(this).data("topPositionTab")) {
                        $(this).data("topPositionTab", $(ui.panel).position().top)
                    }
                    // do crossfade of tabs
                    $(ui.panel).hide().css('z-index', 2).fadeIn(3000, function () {
                        $(this).css('z-index', '');
                        if (firstOpenedPanel) {
                            firstOpenedPanel
                                .toggleClass("ui-tabs-hide")
                                .hide();
                        }
                    });

                    $(this).data("firstOpenedPanel", $(ui.panel));
                }
            }).tabs(3000);

            /*-----------------------------------------------------------------------------------*/
            /*	featured projects
             /*-----------------------------------------------------------------------------------*/
            $(".carousel-single").on("click", function () {
                var scrollTo = $(this),
                    thisHeight = $(this).outerHeight() + 5,
                    container = $(".wrapper-left-tabs");

                container.animate({
                    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - thisHeight
                });
            });
        });
    });
})(jQuery);
