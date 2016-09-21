(function(global, $) {

    "use strict";

    var $nav = $("nav");
    var $search = $(".search");
    var $container = $(".container");
    var bg_origin_pos;


    function init() {

        var $nav_toggle_btn = $nav.prev();
        var $search_toggle_btn = $search.prev();

        // event bind
        $nav_toggle_btn.on("click", toggleOffMenu);
        $search_toggle_btn.on("click", toggleOffMenu);

    }

    function toggleOffMenu() {

        var $this = $(this);

        var offmenu_origin_pos = global.parseInt($this.next().css('right'));

        var container_left = global.parseInt($container.css('marginLeft'));

        bg_origin_pos = global.parseInt($this.css('backgroundPositionX'));

        var buttonText = $this.text();



        if (buttonText === "nav") {

            // toggle bg svg
            $this.css({ 'backgroundPositionX': bg_origin_pos == -242 ? -284 : -242 });

            if (buttonText !== "nav") {
                $container.css({ 'marginLeft': -400 });
            } else {
                $container.animate({
                    'marginLeft': container_left == 0 ? -400 : 0
                });
            }

        } else {

            // toggle bg svg
            $this.css({ 'backgroundPositionX': bg_origin_pos == -327 ? -284 : -327 });

            if (buttonText === "nav") {
                $container.css({ 'marginLeft': -400 });
            } else {
                $container.animate({
                    'marginLeft': container_left == 0 ? -400 : 0
                });
            }
        }
        // toggle offset menu
        $this.next().animate({
            'right': offmenu_origin_pos == 0 ? -400 : 0
        });



        // toggle whole screen



    }

    // function toggleOffSearch() {

    //     var $this = $(this);
    //     var search_origin_pos = global.parseInt($search.css('right'));
    //     var con_origin_pos = global.parseInt($container.css('marginLeft'));

    //     bg_origin_pos = global.parseInt($this.css('backgroundPositionX'));

    //     // switch bg svg
    //     $this.css({
    //         'backgroundPositionX': bg_origin_pos == -327 ? -284 : -327
    //     });

    //     // move off canvas menu
    //     $search.animate({
    //         'right': search_origin_pos == 0 ? -400 : 0

    //     });

    //    // move whole screen
    //     $container.animate({
    //         'marginLeft': con_origin_pos == 0 ? -400 : 0
    //     });

    // }







    $(document).ready(init);
    //$(init);  same as above
    // $();   http://api.jquery.com/ready/



})(this, this.jQuery);
