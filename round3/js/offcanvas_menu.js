(function(global, $) {
    "use strict";

    /** @type {jQuery Object} 콘테이너 */
    var $container = $(".container");
    var $body = $container.parent('body');

    /** @type {jQuery Object} 토글 버튼 */
    var $header_btns = $('.header-right > button');

    var $header_menus = $header_btns.next();
    var $page_overlay = $container.find('.page_overlay');
     
    /** @type {Boolean} 메뉴 열림 상태 */
    var is_open = false;
    /** @type {Number} 애니베이션 속도(ms) */
    var anim_speed = 300;
    /** @type {String} 클래스 속성 이름 */
    var class_name = 'change_icon';

    // 초기화 함수 수행
    $(document).ready(init);

    // ----------------------------------------------------------------------------

    /** @function 초기화 함수 */
    function init() {
        $.each($header_btns, function(idx) {
            // $this 변수에 토글 버튼 jQuery 객체 참조
            var $button = $header_btns.eq(idx);
            var $menu = $button.next();
            // $menu 가로 폭 메모리
            $menu.data('width', $menu.outerWidth());
            // $button jQuery 객체에 이벤트 바인딩
            $button.on('click', $.proxy(settingOffCanvasMenu, $button));


        });
    }
    /** @function 토글 오프캔버스 메뉴 설정 */
    function settingOffCanvasMenu() {

        var $this = this;
        $.proxy(changeButtonIcon, $this)();
        $.proxy(toggleOffCanvasMenu, $this)();


    }
    /** @function 아이콘 변경 */
    function changeButtonIcon() {
        var $this = this;
        if ($this.hasClass(class_name)) {
            $this.removeClass(class_name);
        } else {
            $header_btns.filter('.' + class_name).removeClass(class_name);
            $this.addClass(class_name);
        }
    }
    /** @function 오프캔버스 메뉴 토글 */
    function toggleOffCanvasMenu() {
        var $this = this;
        var $next = $this.next();
        // 오프캔버스 메뉴 열림 상태 유무 확인
        // 메뉴가 열린 상태 -----------------------------------
        // if (isOpenOffCanvasMenu()) {
        if (is_open) {
            $next.hasClass('active') ?
                // 메뉴가 열린 상태에서 같은 버튼 누른 경우 >>>
                closeOffCanvasMenu($next) :
                // 메뉴가 열린 상태에서 다른 버튼 누른 경우 >>>
                // $.proxy(openWithOffCanvasMenu, $this)();
                openWithOffCanvasMenu();

        }
        // 메뉴가 닫힌 상태 -----------------------------------
        else {
            openOffCanvasMenu($next);
        }
    }
    /** @function 오프캔버스 메뉴 상태 확인 */
    // function isOpenOffCanvasMenu() {
    //     return is_open;
    // }
    /** @function 오프캔버스 메뉴 오픈 */
    function openOffCanvasMenu($menu, is_opened) {

        if (!is_opened) {
            is_open = true; // 상태 변경
        }
        $container.animate({ 'marginLeft': -1 * $menu.data('width') }, anim_speed);
        $menu
            .animate({ 'right': 0 }, anim_speed)
            .addClass('active');
       
        $page_overlay.fadeIn();
      
    }
    /** @function 오프캔버스 메뉴 클로즈 */
    function closeOffCanvasMenu($menu, is_opened) {
        if (!is_opened) {
            $container.animate({ 'marginLeft': 0 }, anim_speed);
            $page_overlay.fadeOut();
           
            is_open = false; // 상태 변경
        }
        $menu
            .animate({ 'right': -1 * $menu.data('width')}, anim_speed)
            .removeClass('active');
        
    }

    function openWithOffCanvasMenu() {
        // var $this = this;
        var $active_menu = $header_menus.filter('.active');
        var $deactive_menu = $header_menus.filter(function(idx, el) {
            return !$header_menus.eq(idx).hasClass('active');
        });
        closeOffCanvasMenu($active_menu, true);
        openOffCanvasMenu($deactive_menu, true);
    }

})(this, this.jQuery);
