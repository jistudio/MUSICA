(function(global) {

    "use strict";

    var controller = new ScrollMagic.Controller({

    });

    /**
     * --------------------------------
     * pin제어 예제
     * --------------------------------
     */
    var tween1 = TweenMax.to('.container_top', 0.5, { css: { backgroundPositionY: '-83px' } });
    var tween2 = TweenMax.to('.overlay', 0.5, { css: { display: 'block' } });

    var scene1 = new ScrollMagic.Scene({
            'triggerElement': '.container_top',
            'offset': 220,
            'triggerHook': 0,
            'duration': 0
        })
        .setPin('.container_top', { 'pushFollowers': false })
        .setTween(tween1)
        .setTween(tween2)
        .addIndicators({
            'name': 'container_top'
        })
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            'triggerElement': '.subnav',
            'offset': 0,
            'triggerHook': 0,
            'duration': 0
        })
        .setPin('.subnav', { 'pushFollowers': false })

    .addIndicators({
            'name': 'subnav'
        })
        .addTo(controller);


   

})(this);
