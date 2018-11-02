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
                transform: `translateY(${ scrollPos / 2}px`
            });
        }

    //    header menu fixer
        if ($('header').css('position') === 'absolute' && scrollPos >= sliderHeight) {
            $('header').css({
                position: 'fixed',
                top: 0,
                backgroundColor: '#000000f4',
                animation: 'slideInTop 0.3s forwards'
            });
        }
        else if ($('header').css('position') === 'fixed' && scrollPos <= sliderHeight) {
            $('header').fadeOut(350, 'linear', function () {
                let header = $('header');
                header.css({
                    position: 'absolute',
                    top: '0px',
                    backgroundColor: 'transparent',
                    animation: 'none'
                });
                header.fadeIn(100);
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

    // anchor links slow scroll
    $('.anchor').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});