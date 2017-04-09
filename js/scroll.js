/**
 * Created by Kristoffer on 2017-04-04.
 */


$(document).ready(function() {
    $(".menuItem").click(function(event) {
        var $link = $(this).attr("href");
        $("body").animate({
            scrollTop: $($link).offset().top
        }, 500);
        event.preventDefault();

    });
});



