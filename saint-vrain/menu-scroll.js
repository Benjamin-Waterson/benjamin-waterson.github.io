$(function() {
    var header = $(".menu-top");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('menu-top').addClass("menu-scroll");
        } else {
            header.removeClass("menu-scroll").addClass('menu-top');
        }
    });
});