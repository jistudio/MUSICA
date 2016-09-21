(function(global) {

    "use strict";

    // TweenMax jQuery와 함께 쓸 수 있다
    // $('.brand_logo').on('click', function(){
    //     // TweenMax.to(this, 1, {'scaleX':2, 'scaleY':2});
    //     TweenMax.to(this, 1, {css: {rotation:180, opacity: 0, scale: 0.5}, ease: Quad.easeInOut });
    // });

    // init controller
    // ScrollMagic 네임 스페이스 객체에 불과(빈함수)
    var controller = new ScrollMagic.Controller({

    });

    /**
     * --------------------------------
     * pin제어 예제
     * --------------------------------
     */

    // var what_we_do_pin = new ScrollMagic.Scene({
    //     'triggerElement': '.what_we_do',
    //     'duration': '90%', 
    //     // end point를 90% end가 일러나면서 갑지기 화면에서 사라지는 현상 안보이게 위치 조정


    //     'triggerHook': 0,
    // })
    // .setPin('.what_we_do', {'pushFollowers': false})
    // .addIndicators({
    //     'name':'what we do pin'
    // })
    // .addTo(controller)
    // .on('end', function(e){ // scroll end 지점에서  TweenMax 애니메이션 발생
    //     TweenMax.to('.whole_circle', 1, {'x': -1000, 'autoAlpha': 0, 'ease': Power0.easeNone})
    // });
    // .on('end',function(evt){

    //     this.removePin(true); // 고정전 원래위치로 돌려줌
    // });
    // .on('progress',function(e){   // progress 이벤트를 이용해서 fade-out 효과적용
       
    //     var t = e.target.triggerElement();
    //     t.style.opacity = 1 - e.progress;
    // });

    /**
     * --------------------------------
     * 반복문 이용, 여러어의 scene 제어
     * --------------------------------
     */


    var parallax_items = [{

        trigger_el: '.what_we_do',
        tween_el: '.wwd1, .wwd2'
    }, {
        trigger_el: '.headline',
        tween_el: '.creativity, .circle_right'
    }, {
        trigger_el: '.hightlight_top',
        tween_el: '.hl1, .hl3'
    }, {
        trigger_el: '.hightlight_bottom',
        tween_el: '.hl5, .hl7'
    }];

    // for each 나 for로 바꿔서 index이용하기
    for (let item of parallax_items) {

        // build tween_overview
        let tween = TweenMax.to(item.tween_el, 0.5, { css: { y: -50 } });

        // create a scene review
        let scene = new ScrollMagic.Scene({
                'triggerElement': item.trigger_el,
                'offset': -90, // start this scene after scrolling for 90px
                'duration': 400, // 시간개념이 아니고 거리개념, (400px 거리 안에서) , 지속거리, 애니메이션 끝나는 지점
                'triggerHook': 0, // 0은 화면 가장 위, 1은 가장 밑, 0.5는 가운데, scroll event fire 하는 지점
                // 'reverse': false  // 스크롤 다운했을때  원래대로 돌아가지 않음, 한번만 수행
            })
            // .setClassToggle('.wwd3', 'fade-in') 
            // addClass('fade-in')같음, js애니메이션 말고, css animation , crossbrowsing issue
            .setTween(tween)
            .addIndicators({ // 디버깅
                'name': item.trigger_el

            })
            .addTo(controller); // scene 객체를 controller객체응 연결
    }


})(this);
