var current_load;


var x = 1;
var lastScrollTop;


$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    if (scroll > 1) {
        $(".navbar").addClass("fixed-nav");
    }
    if (scroll < 1) {
        $(".navbar").removeClass("fixed-nav");
    }



});
//$('.navbar-toggle').click(function () {
//
//    var scroll = $(window).scrollTop();
//
//    if (scroll < 200) {
//        $(".navbar").toggleClass("transparent_nav");
//    }
//
//});
