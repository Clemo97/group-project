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
// Copy all the code written above for the navigation bar
// Navigation bar script ends here


// view recipe button hide and show effect
$(".bg1").mouseover(function(){
    $(".btn1").show();
});
$(".bg1").mouseleave(function(){
    $(".btn1").hide();
});

$(".bg2").mouseover(function(){
    $(".btn2").show();
});
$(".bg2").mouseleave(function(){
    $(".btn2").hide();
});

$(".bg3").mouseover(function(){
    $(".btn3").show();
});
$(".bg3").mouseleave(function(){
    $(".btn3").hide();
});

$(".bg4").mouseover(function(){
    $(".btn4").show();
});
$(".bg4").mouseleave(function(){
    $(".btn4").hide();
});

$(".bg5").mouseover(function(){
    $(".btn5").show();
});
$(".bg5").mouseleave(function(){
    $(".btn5").hide();
});

$(".bg6").mouseover(function(){
    $(".btn6").show();
});
$(".bg6").mouseleave(function(){
    $(".btn6").hide();
});