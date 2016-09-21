(function(global, $) {

    "use strict";

    function init() {

        var filter_collpase = $(".filter_collpase");

        filter_collpase.on('click', function() {

            var $this = $(this);
            console.log($this);
            // $this.toggle(
            //     function() {
            //         $this.find('h3:first, h3:last').slideDown();
                    
            //     },
            //     function() {
            //         $this.find('h3:first, h3:last').slideUp();
                   
            //     }
            // );

        });
    }

    $(init);

})(this, this.jQuery);
