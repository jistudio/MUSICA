


    // build tween_overview
    var tween_overview = TweenMax.to(".wwd1, .wwd2", 0.5, { css: { y: -50 } });

    // create a scene review
    var scene = new ScrollMagic.Scene({
            'triggerElement': '.what_we_do',
            'offset': -90, // start this scene after scrolling for 90px
            'duration': 400, // 시간개념이 아니고 거리개념, (400px 거리 안에서) , 지속거리
            'triggerHook': 0, // 0은 화면 가장 위, 1은 가장 밑, 0.5는 가운데, scroll event fire 하는 지점
            // 'reverse': false  // 스크롤 다운했을때  원래대로 돌아가지 않음
        })
        // .setClassToggle('.wwd3', 'fade-in') 
        // addClass('fade-in')같음, js애니메이션 말고, css animation , crossbrowsing issue
        .setTween(tween_overview)
        .addIndicators({ // 디버깅
            'name': 'overview',

        })
        .addTo(controller); // scene 객체를 controller객체응 연결





    // build tween_overview
    var tween_headline = TweenMax.to(".creativity, .circle_right", 0.5, { css: { y: -50 } });

    // create a scene review
    var scene = new ScrollMagic.Scene({
        'triggerElement': '.headline',
        'offset': -120, // start this scene after scrolling for 90px
        'duration': 400, // 시간개념이 아니고 거리개념, (400px 거리 안에서) 
        'triggerHook': 0, // 0은 화면 가장 위, 1은 가장 밑, 0.5는 가운데

    })

    .setTween(tween_headline)
        .addIndicators({ // 디버깅
            'name': 'headline',

        })
        .addTo(controller);


    // build tween_highlights_top
    var tween_highlights_top = TweenMax.to(".hl1, .hl3", 0.5, { css: { y: -50 } });

    // create a scene review
    var scene = new ScrollMagic.Scene({
        'triggerElement': '.hightlight_top',
        'offset': -120, 
        'duration': 400, 
        'triggerHook': 0,

    })

    .setTween(tween_highlights_top)
        .addIndicators({ 
            'name': 'highlights top',

        })
        .addTo(controller);

    // build tween_highlights_bot
    var tween_highlights_bot = TweenMax.to(".hl5, .hl7", 0.5, { css: { y: -50 } });

    // create a scene review
    var scene = new ScrollMagic.Scene({
        'triggerElement': '.hightlight_bottom',
        'offset': -120, 
        'duration': 400, 
        'triggerHook': 0, 

    })

    .setTween(tween_highlights_bot)
        .addIndicators({ // 디버깅
            'name': 'highlights bottom',

        })
        .addTo(controller);


