'use strict';

var app = angular.module('servitron', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'firebase', 'ngResource', 'ui.router'])

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://servitron-dev.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl',
      resolve: {
          "currentAuth": ["Auth", "$state", function(Auth, $state) {
            return Auth.$waitForAuth().then(function(auth){
              if (auth){
                $state.go("auth.dashboard");
              }
            });
          }]
        }
    })

    .state('auth', {
      url: '/auth',
      templateUrl: 'partials/auth.html',
      controller: 'NavCtrl',
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })

    .state('auth.dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardCtrl'
    });

  $urlRouterProvider.otherwise('/login');
})

app.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    } 
  });
}]);