'use strict';

app.controller('LoginCtrl', function ($scope, Auth, $state) {


    $scope.user = {};
    $scope.loginStatus = 'Log In';
    $scope.registerStatus = 'Sign Up';

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
            $state.go("auth.dashboard");
          }).catch(function(error) {
            $scope.loginStatus = 'Log In';
            $scope.error = error;
          });
        }

    };

    $scope.register = function() {

      if (!$scope.user.email){
        $scope.error = 'Invalid Email';
      }else if (!$scope.user.password){
        $scope.error = 'No password';
      }else if ($scope.user.password != $scope.user.passwordRepeat){
        $scope.error = 'Passwords don\'t match';
      }else{
        $scope.registerStatus = 'Registering...';
        Auth.$createUser({
            email: $scope.user.email,
            password: $scope.user.password
        }).then(function(userData) {
          return Auth.$authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          });
        }).then(function(authData) {
          $state.go("auth.dashboard");
        }).catch(function(error) {
          $scope.error = error;
        });
      }
    };
    
});