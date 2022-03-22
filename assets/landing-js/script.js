window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementByClassName("navbar").style.background = "#ffffff";
  } else {
   
    document.getElementByClassName("navbar").style.background = "none";
  }
}