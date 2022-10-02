/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/

/* 01 - VARIABLES */
/* 02 - WINDOW LOAD */
/* 03 - SWIPER SLIDER */
/* 04 - MOBILE MENU */
/* 05 - WINDOW SCROLL */
/* 06 - CLICK */
/* 07 - POPUP OPEN */

jQuery(function($) { "use strict";

    /*============================*/
	/* 01 - VARIABLES */
	/*============================*/
	
	var swipers = [], winW, winH, winScr, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
	}
	pageCalculations();
					
   var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
       $('.bg.ready').removeAttr('data-jarallax').addClass('fix'); 
    }
					
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	  if (isSafari) {
	     $('.bg.ready').removeAttr('data-jarallax').addClass('fix');
	  }			
					
   if(_ismobile) {
	   $('body').addClass('mobile');
	   $('.bg').removeAttr('data-jarallax');
    }					
	
	/*============================*/
	/* 02 - WINDOW LOAD */
	/*============================*/
	
	$(window).load(function(){

	    $('.loader').addClass('active');
		
		animateItem();
		animateImg();
		scrolHeader();
		
		setTimeout(function(){
		  $('.loader').fadeOut(); 
		  $('body').addClass('start');	
		},1000);
		
	});
	
	/*============================*/
	/* 03 - SWIPER SLIDER */
	/*============================*/
					
	var mySwiper = new Swiper('.swiper-container', {
		speed: 500,
		effect: 'fade',
		pagination: '.pagination',
		paginationClickable: true,
		keyboardControl: true,
		nextButton: '.swiper-arrow-right',
		prevButton: '.swiper-arrow-left',
		loop: true,
		fade: {
		  crossFade: false
		}
	});
					
	var mySwiper = new Swiper('.slider-mobile-man', {
		speed: 500,
		keyboardControl: true,
		nextButton: '.swiper-arrow-right',
		prevButton: '.swiper-arrow-left'
	});				
					
	var mySwiper = new Swiper('.slider-mobile-woman', {
		speed: 500,
		keyboardControl: true,
		nextButton: '.swiper-arrow-right',
		prevButton: '.swiper-arrow-left'
	});
					
	var mySwiper = new Swiper('.slider-mobile-child', {
		speed: 500,
		keyboardControl: true,
		nextButton: '.swiper-arrow-right',
		prevButton: '.swiper-arrow-left'
	});				
					
	var galleryTop = new Swiper('.gallery-top', {
		slidesPerView: 1,
		onSlideChangeStart: function(swiper){
		  $('.thumbs-item').removeClass('active');		
			$('.thumbs-item').eq(swiper.activeIndex).addClass('active');
		},
    });
	var verticalSlider = new Swiper('.vertical-slider', {
		slidesPerView: 1,
        direction: 'vertical',
		mousewheelControl: true,
		mousewheelForceToAxis: true,
		loop: true,
		nextButton: '.swiper-arrow-right',
		prevButton: '.swiper-arrow-left'
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
		onSlideClick: function(swiper) {
			swiper.closest('.two-slider').find('.gallery-top').swipeTo(swiper.activeIndex);
			
		}
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
					
					
	$('.thumbs-item').on('click', function(){
	  var indexTumb = $('.thumbs-item').index(this);
	   $('.thumbs-item').removeClass('active');	
	    $(this).addClass('active');	
	     galleryTop.slideTo(indexTumb);
	});
					
	/*============================*/
	/* 04 - MOBILE MENU */
	/*============================*/
	
	$(document).on('click', '.burger-menu', function(){
		if ($('.slide-menu').hasClass('slide')) {
			$('.header-style-1.type-2').removeClass('layer');
		    $('.slide-menu').removeClass('slide');
			$('body').removeClass('overflow');
			$(this).removeClass('active');
		}else{
			$('.header-style-1.type-2').addClass('layer');
		    $('.slide-menu').addClass('slide');
			$('body').addClass('overflow');
			$(this).addClass('active');
		}
		   return false;
	});
	
	/*============================*/
	/* 05 - WINDOW SCROLL */
	/*============================*/
	
					
    $(window).scroll(function() {
	    animateItem(); 
		animateImg();
		scrolHeader();
	});
					
	function scrolHeader(){	
	   if ($(window).scrollTop() > $('.header-style-1').height()) {
	         $('.header-style-1').addClass('scrol'); 
		 }else{
			 $('.header-style-1').removeClass('scrol');
		 }
	}				
	
	function animateItem(){
	   if ($('.item-animation').length) {
		 $('.item-animation').not('.animated').each(function(){ 
		  if($(window).scrollTop() >= $(this).offset().top-($(window).height()-$(this).height()+100))
		   {$(this).addClass('animated');}});
		}
	}
					
	function animateImg(){
	   if ($('.animation-img').length) {
		 $('.animation-img').not('.animated').each(function(){ 
		  if($(window).scrollTop() >= $(this).offset().top-($(window).height()))
		   {$(this).addClass('animated');}});
		}
	}				
	animateItem();	
	animateImg();

	/*============================*/
	/* 06 - CLICK */
	/*============================*/
	
	$('.input-field input').keydown(function(){	
		if ($(this).val() !== '') {
	        $(this).parent().addClass('act');
		}else{
		    $(this).parent().removeClass('act'); 
		}
	});	
	
	$('.clear-input').on('click', function(){
	  $(this).parent().find('input').val('','');
		 $(this).parent().removeClass('act');
	});				
	
	$('.search-menu').on('click', function(){
	  $('.search-block').addClass('open-search');
	});
    
	$('.close-popup').on('click', function(){
	  $(this).parent().removeClass('open-search');
		$(this).parent().removeClass('active');
		if ($('.slide-menu').hasClass('slide')) {
		    $('body').addClass('overflow');
		}else{
		    $('body').removeClass('overflow');
		} 
	});	
					
	$('.more').on('click', function(){
	  var moreContent = $(this).attr('data-more'),
		 moreWrap = $(this).parent().parent().find('.more-insert');
            moreWrap.html(moreContent);
		     setTimeout(function(){
			   moreWrap.find('.item-animation').addClass('animated');
			 },100);
		     
		     $(this).fadeOut(50);	
	      return false;
	});	
	
	if ($(window).width()<992) {				
		$('.list-menu > li').on('click', function(){
			$(this).toggleClass('active').find('.drop-menu').slideToggle(300);
		});	
	}
	
	if ($(window).width()>992) {				
		$('.header-style-1.type-2 .list-menu > li').on('mouseenter', function(){
		   $(this).find('.drop-menu').slideDown(300);
		});

		$('.header-style-1.type-2 .list-menu > li').on('mouseleave', function(){
		   $(this).find('.drop-menu').slideUp(300);
		});	
	}
					 
					
    $('.delete-item').on('click', function(){
	   $(this).parent().fadeOut(300);
	});					
	
	/*============================*/
	/* 07 - POPUP OPEN */
	/*============================*/
	
    $('.popup-open').on('click', function(){
	  var openData = $(this).attr('data-popup');
	   $('.popup.mark-'+openData+'').addClass('active');
		 $('body').addClass('overflow');
		   return false;
	});
	
	/*============================*/
	/* 08 - VIDEO OPEN */
	/*============================*/
					
	$('.play-button').on('click', function(){
	   var videoLink = $(this).attr('data-video'),
		   thisAppend = $(this).closest('.video-h').find('.video-iframe');
		   $(this).closest('.video-h').find('.video-item').addClass('act');
		   $('<iframe>').attr('src', videoLink).appendTo(thisAppend);
		return false;
	});
			  
	$('.close-video').on('click', function(){
		var videoClose = $(this).parent().find('.video-iframe');
	     $(this).closest('.video-h').find('.video-item').removeClass('act');
		  videoClose.find('iframe').remove();
		  return false;
	});
					
	/*============================*/
	/* 08 - FILTER CATALOG */
	/*============================*/				
	
	$('.list-open').on('click', function(){
	    $(this).parent().find('.list-slide').slideToggle(300);
	});	
					
	$('.list-slide li a').on('click', function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - $('header').height()
		}, 500);
		$('.list-slide li a').removeClass('act');
		  $(this).addClass('act');
		    $(this).closest('.filter-list').find('.list-slide').slideUp(300);
		      return false;
	});				
	
	$('.more-popup-open').on('click', function(){
	   $('.more-popup').addClass('active');
		  return false;
	});	
					
	$('.more-popup .close-popup').on('click', function(){
	  $(this).parent().removeClass('active');
	});
	
	/*============================*/
	/* 09 - PARALLAX BANER */
	/*============================*/				
					
	$(window).scroll(function(e){
	  parallax();
	});

	function parallax(){
	  var scrolled = $(window).scrollTop();
	  $('.asseccories-baner .title').css('opacity',1-(scrolled*.00275));
	}

	/*============================*/
	/* 10 - ACCORDION */
	/*============================*/
	$('.accordion-title').on('click', function () {
		var $t = $(this);

		$t.toggleClass('active');
		$t.next('.accordion-content').slideToggle();
	});



});