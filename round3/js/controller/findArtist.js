(function(global, angular){
  'use strict';

  // Angular 모듈 정의
  var app = angular.module('artApp', []);

  app.controller('artMemberListController', ['$http', function($http){

    // 컨트롤 객체 참조 변수 설정
    var ctrl = this;
    // 참조된 컨트롤 객체의 속성 members 설정(초기 값)
    ctrl.members = [];
    ctrl.search = {};

    // 컨트롤러 메소드
    ctrl.filterPosition = function(pos) {
      ctrl.search.poisiton = pos;
    };

    // 비동기 통신 수행
    // console.log('$http:', $http);
    $http({
      'method': 'GET',
      'url': '/js/db/artist.json'
    }).then(successAjaxCall, errorAjaxCall);

    function successAjaxCall(response) {
      // console.log('비동기 통신에 성공하다.');
      ctrl.members = response.data;
    }
    function errorAjaxCall(response) {
      // console.log('비동기 통신에 실패하다.');
    }

  }]);

 
})(this, this.angular);