(function(global, $) {

    "use strict";
    $(document).ready(init);

    function init() {

        var $find_artist = $(".find_artist");
        var $find_a = $find_artist.children('a');
        var $find = $find_artist.find('h3:first');
        var $all = $find_artist.find('h3:last');
        var $category_list = $find_artist.next();

        $category_list.hide();

        $find_artist.on('click', function() {

            $find.toggleClass('drop');
            $all.toggleClass('drop');
            $find_a.toggleClass('down');
            $category_list.slideToggle('fast');

        });
    }



})(this, this.jQuery);
