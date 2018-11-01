import 'owl.carousel2/dist/owl.carousel.min';

$(function () {
    // variables
    let jQwindow = $(window);
    let screenHeight = jQwindow.height();
    let screenWidth = jQwindow.width();
    let sliderHeight;
    // main carousel
    let mainCarousel = $('.main-carousel');
    mainCarousel.owlCarousel({
        nav: false,
        items: 1,
        mouseDrag: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000
    });

    sliderHeight = $('.greetings-slider').height();
    jQwindow.resize(function () {
        screenHeight = jQwindow.height();
        screenWidth = jQwindow.width();
        sliderHeight = $('.greetings-slider').height();
    });

    jQwindow.scroll(function (event) {
        let scrollPos = jQwindow.scrollTop();
        // carousel parallax
        if (screenWidth >= 992 && scrollPos <= sliderHeight) {
            let translateString = 'translateY(-' + (scrollPos / 10) + ')';
            $('.main-carousel .item img').css({
                transform: `translateY(${ scrollPos / -4}px`
            });
        }
    });

//    toggleMenu
    $('.menu-toggler').click(function () {
        $('header > nav').addClass('show');
        $('header > nav').removeClass('unshow');
        $('.menu-toggler').fadeOut(200);
    });
    $('header .menu-closer').click(function () {
        $('header > nav').removeClass('show');
        $('header > nav').addClass('unshow');
        $('.menu-toggler').fadeIn(600);
    });
});