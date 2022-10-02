(function ($) {
    "use strict";

    // menu scroll


    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header-1");
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    // Main menu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });
    // menu-2

    $('.header-2 .sub-menu').hide();

    $(".header-2 span").click(function () {

        $(this).parent().children("ul").toggle();

    })
    $(".header-2 .menu-level h4").click(function () {

        $(this).parent().children("ul").toggle();

    })
    // Open Menu
    $('.menu-bar button').on('click', function () {
        $('.side-menu').addClass('open-menu')

    })
    // Close Button
    $('.close-icon').on('click', function () {
        $('.side-menu').removeClass('open-menu')
    })

        // // search
        $('.search span').on('click', function () {
            $('.search-form').addClass('search-open');
            $('.search-overlap').addClass('overlap-2')
        })
        // Close Button
        $('.search-close span').on('click', function () {
            $('.search-form').removeClass('search-open');
            $('.search-overlap').removeClass('overlap-2')
            
        })
        $('.product-cart').on('click', function () {
            $('.product-on-sale').addClass('cart-open');
        })
        $('.product-close-icon span').on('click', function () {
            $('.product-on-sale').removeClass('cart-open')
            
        })
    // Slider Area

    $('.slider-area').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 400,
        prevArrow: '<a class="slider-slick-prev"><i class="las la-arrow-left"></i></a>',
        nextArrow: '<a class="slider-slick-next"><i class="las la-arrow-right"></i></a>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    if ($('.slick-slide').hasClass('slick-active')) {
        $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft');
        $('.slider-images ').addClass('animated fadeInRight');
    } else {
        $('.slider-description h1, .slider-description p,.slider-description a').removeClass('animated fadeInLeft');
        $('.slider-images').removeClass('animated fadeInRight');
    }
    $('.slider-area').on('beforeChange', function () {
        $('.slider-description h1, .slider-description p, .slider-description a').removeClass('animated fadeInLeft').hide();
        $('.slider-images').removeClass('animated fadeInRight').hide();
        setTimeout(() => {
            $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft').show();
            $('.slider-images ').addClass('animated fadeInRight').show();
        })
    });

    // auto-popup
    $(document).ready(function () {
        setTimeout(function () {
            $('#autopopup-option').css('display', 'block');
        }, 2500);
        $('#close-button').click(function () {
            $('#autopopup-option').css('display', 'none');
        })

    });

    $(".auto_popup ").css("display", "none");

    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // New Arrival

    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })

    $('.arrival-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.arrival-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // Brand Area

    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 513,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 367,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // page option

    $('.sub-option').hide();

    $(".option-dropdown").click(function () {

        $(this).parent().children(".sub-option").toggle();

    });
    // Product Active
    $('.on-sale-product-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        speed: 400,
        prevArrow: '<a class="slider-slick-prev"><i class="las la-angle-left"></i></a>',
        nextArrow: '<a class="slider-slick-next"><i class="las la-angle-right"></i></a>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(function () {
        $('.qty').niceNumber();
    });

    //for menu active class
    $('.shop-details .product-size li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    // team
    $('.team').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 400,
        prevArrow: '<a class="team-prev"><i class="fas fa-long-arrow-alt-left"></i>Previous</a>',
        nextArrow: '<a class="team-next">Next<i class="fas fa-long-arrow-alt-right"></i></a>',

    });
        //Loader

        jQuery(window).load(function () {
            $(".loader").fadeOut(1500);
        });
        $('.popbtn').click(function(){
            $(".product-popupList").addClass('active');
        });
        $('.close-popup button').click(function () {
            $('.product-popupList').removeClass("active");
        })
    // scroll top
    window.addEventListener('scroll',function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active" , window.scrollY >500)
    })
    const btnTopToScroll = document.querySelector("#scrollToTop");

    btnTopToScroll.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    })
})(jQuery);