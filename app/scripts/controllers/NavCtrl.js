'use strict';

app.controller('NavCtrl', function ($scope, Auth, $state) {

  $scope.logout = function(){

    Auth.$unauth();
    $state.go("login");

  }

});