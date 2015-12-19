'use strict';

app.controller('DashboardCtrl', function ($scope, Auth, $state) {

  $scope.logout = function(){

    Auth.$unauth();
    $state.go("login");

  }

});