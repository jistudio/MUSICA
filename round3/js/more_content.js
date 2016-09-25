(function(global, $) {

    "use strict";

    function MoreContent(selector) {
        this.$button = $(selector).children('h4');

        this.$button_svg = this.$button.children('a')
        this.$hidden_content = this.$button.next();

        this.Bindevent();
    }
    MoreContent.prototype.Bindevent = function() {
        var that = this;
        that.$button.on('click', function(e) {
            that.$button_svg.toggleClass('on');
            that.$hidden_content.slideToggle('fast');
            e.preventDefault();
        })
    }

    // 객체 외부 공개
    global.MoreContent = MoreContent;

})(this, this.jQuery);
