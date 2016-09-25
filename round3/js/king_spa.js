(function(global, XHR) {
    'use strict';

    var xhr = new XHR;
    console.log(xhr); // AJAX 통신을 위해 생성된 객체

    xhr.onreadystatechange = function() {
        // console.log(this); // xhr
        // 200 서버 통신 성공
        // 4 데이터 전송이 완료된 상태
        if (this.status === 200 && this.readyState === 4) {
            view.innerHTML = this.responseText; // HTML Code
        }
    };

    // 문서객체 참조
    var view = document.querySelector('.spa_content');
    var nav_links = document.querySelectorAll('.subnav a');

    

    for (var link, i = nav_links.length - 1; nav_links[i]; i--) {
        link = nav_links[i];
        // 1. 클로저 + 우회 메소드($.proxy, bind) 사용
        // <a>about</a>
        link.onclick = (function(index){

          return viewUpdate.bind(link, index);
        })(i);
      
    }

    // 페이지 뷰를 업데이트 하는 함수
    var views = 'about news reviews recordings'.split(' ');


    // function viewUpdate() {
    function viewUpdate(index) {
        
        for( var i=0; i < nav_links.length; i++){
          nav_links[i].classList.remove('on');
        }

        this.classList.add('on');

        var page = 'view/' + views[index] + '.html';

        xhr.open('GET', page);
        xhr.send();
        // 페이지의 주소(해쉬) 값을 변경
        global.location.hash = page;
        // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
        return false;
    }

    link.onclick();



})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));
