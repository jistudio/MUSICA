(function(global, $) {

    "use strict";

    function ReadMore(selector) {
        this.$read_more = $(selector);

        this.$read_more_a = this.$read_more.children('a');
        this.$open = this.$read_more.find('span:first');

        this.$close = this.$read_more.find('span:last');

        this.$read_more_content = this.$read_more.parent().next();

        this.Bindevent();

    }

    ReadMore.prototype.Bindevent = function() {

        var that = this;
        that.$read_more.on('click', function() {

            that.$open.toggleClass('up');
            that.$close.toggleClass('down');
            that.$read_more_a.toggleClass('on');
            that.$read_more_content.slideToggle('fast');
            event.preventDefault();
        });
    }

    global.ReadMore = ReadMore;

})(this, this.jQuery);
