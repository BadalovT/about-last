$(document).ready(function(){
     var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();

    $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    center: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
            0 : {
                items: 2
            },
            480 : {
                items: 3
            },
            768 : {
                items: 6
            }
        }
});

 $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    });