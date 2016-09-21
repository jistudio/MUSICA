(function(global, $){

	  
		
		"use strict";

        function init() {

            var $box = $(".demo-box");
            var $box2 = $(".scale");

            $box
                .on("mouseenter", function() {
                    var $this = $(this);

                    $this.addClass("primary");
                    if ($this.hasClass("secondary")) {
                        $this.css("font-size", "+=5");
                    }


                })
                .on("mouseleave", function() {
                    var $this = $(this);
                    $this.removeClass("primary");
                    $this.addClass("secondary");

                });



             $box2.on("click",function(){
             		var $this = $(this);

             		$this.css({
             			width: function(index, value){
             				
             				return global.parseInt(value) * 1.2;
             			},
             			height: function(index, value){
             				
             				return global.parseInt(value) * 1.2;
             			}
             		});
             });




        }


        $(document).ready(init);


})(this, this.jQuery);