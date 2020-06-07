$(document).ready(function() {
    $('.owl-carousel').owlCarousel( {
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoheight: false,
        Hover: true,
        responsive:{
            0: {
                items:1,
            },
            600: {
                items:2,
            },
            1000: {
                items:3,   
            }
        }
    })
});