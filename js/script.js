import 'owl.carousel2/dist/owl.carousel.min';

$(function () {
    let mainCarousel = $('.main-carousel');
    mainCarousel.owlCarousel({
        nav: false,
        items: 1,
        mouseDrag: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000
    });
});