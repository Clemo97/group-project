//Transparent navbar Scroll function
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
//Search Function
function search() {
    const searchBox = document.getElementById("searchItem").value.toUpperCase();
    const storeItems = document.getElementById("recipeList");
    const recipe = document.querySelectorAll(".recipe");
    const rname = storeItems.getElementsByTagName("h2");

    for(var i=0; i<rname.length; i++){
        let match = recipe[i].getElementsByTagName("h2")[0];
        if(match){
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                recipe[i].style.display="";
            }else{
                recipe[i].style.display="none";

            }
        }
    }
}



