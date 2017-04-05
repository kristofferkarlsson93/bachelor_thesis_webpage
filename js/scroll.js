/**
 * Created by Kristoffer on 2017-04-04.
 */

window.onload =function () {
    $(document).ready(function() {
        $(".menuItem").click(function(event) {

            //On bigscreen-devices.
            console.log(this.offsetTop)
            var $link = $(this).attr("href");
            $("body").animate({
                scrollTop: $($link).offset().top
            }, 500);
            event.preventDefault();

        });
    });

}


