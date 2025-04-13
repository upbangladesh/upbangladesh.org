(function ($) {
"use strict";
/*--
	Preloader
-----------------------------------*/
var win = $(window);
win.on('load', function() {
	$('.preloader').fadeOut('slow');;
});
/*--
	Menu Sticky
-----------------------------------*/
var sticky = $('.header-area');
win.on('scroll', function() {
	var scroll = win.scrollTop();
	if (scroll < 245) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});
/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = $('.header-bottom').height() - 34;
$('#main-menu nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});

/*--
	Bootstrap Menu Fix For Mobile
-----------------------------------*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
/*--
	Hero Slider
-----------------------------------*/
$('.hero-slider').slick({
    arrows: false,
    autoplay: false,
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
            autoplay: true,
            autoplaySpeed: 7000,
          }
        },
    ]
});
/*--
	Service Active
-----------------------------------*/
$('.single-service')
    .mouseover(function() {
    $('.single-service').removeClass('active');
    $(this).addClass('active');
});
/*--
	Achivment Slider
-----------------------------------*/
$('.achivment-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
});
/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var galleryFilter = $('.gallery-filter');
var galleryGrid = $('.gallery-grid');
/*-- Images Loaded --*/
galleryGrid.imagesLoaded( function() {
    /*-- Filter List --*/
    galleryFilter.on( 'click', 'button', function() {
        galleryFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        galleryGrid.isotope({ filter: filterValue });
    });
    /*-- Filter Grid --*/
    galleryGrid.isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: '.gallery-item',
      }
    });
});

/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});
/*-- Image --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*-- Gallery Video --*/
var videGalleryPopup = $('.video-gallery-popup');
videGalleryPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	},
	gallery:{
		enabled:true
	}	
});
/*--
	Smooth Scroll
-----------------------------------*/
$('[data-scroll]').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: -76,
	});
});
/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
 

})(jQuery);	
