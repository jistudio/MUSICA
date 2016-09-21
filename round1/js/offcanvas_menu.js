(function(global, $) {

    "use strict";
    var $header_btns = $('.header-right > button');

    var $container = $(".container");
    console.log($container);


    function init() {

        $header_btns.each(function() {
            var $this = $(this);

            $this.on('click', changeIcon);
        });

    }

    function changeIcon() {

        var $this = $(this);


        // 초기화
        $header_btns.removeClass('change_icon');
        $header_btns.next().css({ 'right': -400 });
        $container.css({ 'marginLeft': 0 });

        // selected
        $this.addClass('change_icon');
        $this.next().animate({ 'right': 0 });
        $container.animate({ 'marginLeft': -400 });

        if($this.hasClass('change_icon')){
            $this.on('click', closeMenu);
        }
    }

    function closeMenu() {
        $header_btns.next().css({ 'right': -400 });
        $container.css({ 'marginLeft': 0 });
    }

    $(document).ready(init);
   

})(this, this.jQuery);
