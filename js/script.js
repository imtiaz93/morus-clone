$(function () {
    "use strict";
    // Menu fix starts
    var navoff = $(".main_menu").offset().top;
    // alert(navoff);
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
        } else {
            $(".main_menu").removeClass("menu_fix");
        }
    });
    // Banner Slider

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    });

    // Service Slider
    $('.slide_it').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
    });

    // Instagram Images Slide
    $('.insta_slide_img').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right service_nxt"></i>',
        prevArrow: '<i class="fas fa-chevron-left service_prev"></i>',
    });
    // Home page 2 banner slider 
    $('.banner_slide_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right home_2_nxt"></i>',
        prevArrow: '<i class="fas fa-chevron-left home_2_prev"></i>',
    });

    // Home page 2 banner slider 
    $('.banner_slide_1_fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right home_2_nxt"></i>',
        prevArrow: '<i class="fas fa-chevron-left home_2_prev"></i>',
    });
});