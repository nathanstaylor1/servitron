'use strict';

app.controller('NavCtrl', function ($scope, AuthService, $state) {

  $scope.logout = function(){

    AuthService.$unauth();
    $state.go("login");

  }

});