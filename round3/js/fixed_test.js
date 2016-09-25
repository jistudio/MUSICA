      (function(global, $) {

        "use strict";

        var $subnav = $('.subnav');
        var distance = 93;
        var fixed_pos = $subnav.offset().top -1 * distance ;
        var $container_top = $('.container_top');
        var height = $container_top.css('paddingBottom');
       
        var $window = $(window);

        $(document).ready(fixSubnav);


        function fixSubnav() {

            $window.on('scroll', function() {
                // scroll 위치값 구하기
                var scrollY = window.pageYOffset;
              
               

                
            });


        }
    })(this, this.jQuery);