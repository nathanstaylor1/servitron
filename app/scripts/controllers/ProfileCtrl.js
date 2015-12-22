'use strict';

app.controller('ProfileCtrl', function ($scope, $stateParams, UserService, configData, AuthService) {

	UserService.bindUserTo($scope, 'user', $stateParams.uid);

	$scope.profileFields = configData.profileFields;
	$scope.authUid = AuthService.$getAuth().auth.uid;

});