$(function() {
    $('.menu_btn').click(function() {
        $('.menu_ul').toggleClass('active');
    })
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('.menu_ul').removeClass('active');
        }
    });
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    AOS.init();

})