/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Coming Soon init js
*/

// slider

var previewThumbsnav = new Swiper('.preview-thumbsnav', {
    spaceBetween: 14,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryThumbs = new Swiper('.preview-thumb', {
    spaceBetween: 0,
    thumbs: {
        swiper: previewThumbsnav
    }
});

// countdown
$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $(this).html(event.strftime(''
        + '<div class="coming-box"><div class="count-title">Days</div><div class="count-num">%D</div></div> '
        + '<div class="coming-box"><div class="count-title">Hours</div><div class="count-num">%H</div></div> '
        + '<div class="coming-box"><div class="count-title">Minutes</div><div class="count-num">%M</div></div> '
        + '<div class="coming-box"><div class="count-title">Seconds</div><div class="count-num">%S</div></div> '));
    });
});