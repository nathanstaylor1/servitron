'use strict';

app.controller('SearchCtrl', function ($scope, UserService) {

	$scope.init = function(){

		UserService.bindAllUsersTo($scope, 'users');

	}

	$scope.showFilter = function(){


	}

	$scope.filterOptions = [

		{
			name: "service",
			display: "Service"

		}

	]



	$scope.init();


});