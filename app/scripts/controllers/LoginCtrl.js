'use strict';

app.controller('LoginCtrl', function ($scope, Auth, $state) {


    $scope.user = {};
    $scope.loginStatus = 'Log In';

    $scope.login = function() {

        if (!$scope.user.email){
          $scope.error = 'Invalid Email';
        }else if (!$scope.user.password){
          $scope.error = 'No password';
        }else{
          $scope.loginStatus = 'Authorizing...';
          Auth.$authWithPassword({
              email: $scope.user.email,
              password: $scope.user.password
          }).then(function(authData) {
            $scope.loginStatus = 'Logged In';
            $scope.authData = authData;
            $state.go("dashboard");
          }).catch(function(error) {
            $scope.loginStatus = 'Log In';
            $scope.error = error;
          });
        }

    };

});