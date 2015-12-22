'use strict';

app.controller('EditProfileCtrl', function ($scope, UserService, ServiceService, configData) {

	$scope.init = function(){

		UserService.bindAuthUserTo($scope, 'user');

	}

	$scope.init();

	$scope.profileFields = configData.profileFields

});