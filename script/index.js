function scrollHandler(){
    let y = window.scrollY;
    let index = Math.floor(y / 400)
    let right = index % 2 == 0 
    if (!$("#content_" + (index + 1)).hasClass(right ? "content-inner-right" : "content-inner-left")) {
        if($("#blank").hasClass("blank"))
            $("#blank").removeClass("blank")

        $("#content_" + (index + 1)).show();
        $("#content_" + (index + 1)).addClass(right ? "content-inner-right" : "content-inner-left");
    } 
}


$(document).ready(function(){
    for (let index = 0; index < 5; index++) {
        $("#content_" + (index + 1)).hide();
    }

    window.scrollTo({ top: 0,  left: 0, behavior: 'smooth'});
    window.addEventListener("scroll", scrollHandler)

    $("#home").on("click", () => {
        $(window).scrollTop(0);
    })

    $("#about").on("click", () => {
        $(".about-me").get(0).scrollIntoView();
    })
})
