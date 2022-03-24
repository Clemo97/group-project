//on scroll effect
$(document).ready(function(){

    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < 40) {
            header.removeClass('bg-light').addClass("bg-none, navlinkc");
        } else {
            header.removeClass("bg-none, navlinkc").addClass('bg-light');
        }
    });

    var link = $(".nav-link");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < 40) {
            link.removeClass('').addClass("navlinkc");
        } else {
            link.removeClass("navlinkc").addClass('');
        }
    });
});