function() {
    //caches a jQuery object containing the header element
    var header = $(".site-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass("site-header--hidden");
        } 

        else {
            header.addClass("site-header--hidden");
        }
    });
}