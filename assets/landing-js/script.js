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

//code for news letter pop up
$(document).ready(function () {
  var delay = 300; // milliseconds
  var cookie_expire = 0; // days

  var cookie = localStorage.getItem("list-builder");
  if (cookie == undefined || cookie == null) {
    cookie = 0;
  }

  if ((new Date().getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
    $("#list-builder")
      .delay(delay)
      .fadeIn("fast", () => {
        $("#popup-box").fadeIn("fast", () => {});
      });

    $("button[name=subscribe]").click(() => {
      $.ajax({
        type: "POST",
        url: $("#popup-form").attr("action"),
        data: $("#popup-form").serialize(),
        success: (data) => {
          $("#popup-box-content").html(
            "<p style='text-align: center'>Thank you for subscribing to Swahili Dishes newsletter!</p>"
          );
        },
      });
    });

    $("#popup-close").click(() => {
      $("#list-builder, #popup-box").hide();
      localStorage.setItem("list-builder", new Date().getTime());
    });
  }
});
$.post($("#popup-form").attr("action"), { name: $("input[name=name]").val(), email: $("input[name=email]").val(), list: $("input[name=list]").val() }, (result) => {
    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
});