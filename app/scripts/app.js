'use strict';

var app = angular.module('servitron', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'firebase', 'ngResource', 'ui.router'])

app.constant('firebaseRef', 'https://servitron-dev.firebaseio.com');

app.factory("AuthService", ["$firebaseAuth", "firebaseRef", "$rootScope",
  function($firebaseAuth, firebaseRef, $rootScope) {
    var ref = new Firebase(firebaseRef);
    return $firebaseAuth(ref);
  }
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
      /*resolve: {
          "currentAuth": ["AuthService", "$state", function(AuthService, $state) {
            return AuthService.$waitForAuth().then(function(auth){
              if (auth){
                $state.go("auth.dashboard");
              } else {
                $state.go("login");
              }
            });
          }]
        }*/
    })

    .state('auth', {
      url: '/auth',
      templateUrl: 'partials/auth.html',
      controller: 'NavCtrl'
/*      resolve: {
        "currentAuth": ["AuthSerice", function(AuthService) {
          return AuthService.$requireAuth();
        }]
      }*/
    })

    .state('auth.dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardCtrl'
    })

    .state('auth.edit-profile', {
      url: '/edit-profile',
      templateUrl: 'partials/edit-profile.html',
      controller: 'EditProfileCtrl'
    })

    .state('auth.edit-services', {
      url: '/edit-services',
      templateUrl: 'partials/edit-services.html',
      controller: 'EditServicesCtrl'
    })

    .state('auth.search', {
      url: '/search',
      templateUrl: 'partials/search.html',
      controller: 'SearchCtrl'
    })

    .state('auth.chat', {
      url: '/chat',
      templateUrl: 'partials/chat.html',
      controller: 'ChatCtrl'
    })

    .state('auth.profile', {
      url: '/profile',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl'
    })

  $urlRouterProvider.otherwise('/login');
})

app.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    } 
  });
}]);