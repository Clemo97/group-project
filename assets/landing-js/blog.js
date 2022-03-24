$(document).ready(function(){

    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < 40) {
            header.removeClass('bg-none').addClass("bg-none, navlinkc");
        } else {
            header.removeClass("bg-none, navlinkc").addClass('bg-none');
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

$(".blogtit1").click(function() {
    $("#blog1").toggle();
    $(".area").hide();
      
  });
  $(".abtimg").click(function() {
    $("#blog1").hide();
    $(".area").show(); 
  });

  $(".blogtit2").click(function() {
    $(".blog2").toggle();
    $(".area").hide();
      
  });
  $(".abtimg").click(function() {
    $(".blog2").hide();
    $(".area").show(); 
  });