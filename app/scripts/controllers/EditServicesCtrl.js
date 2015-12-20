'use strict';

app.controller('EditServicesCtrl', function ($scope, UserService, ServiceService) {

	$scope.init = function(){

		$scope.newServiceData = {};

		UserService.bindUserTo($scope, 'user');

	}

	$scope.addService = function(){

	  if (!$scope.newServiceData.name){
        $scope.error = 'Enter a Name';
      }else if (!$scope.newServiceData.level){
        $scope.error = 'Select a Level';
      }else if (!$scope.newServiceData.description){
        $scope.error = 'Enter a Description';
      }else{

      	//create a service in the db

      		//gen a key for it

      	ServiceService.createService($scope.newServiceData.name)
      	$scope.user.services[$scope.newServiceData.name] = $scope.newServiceData;

      }

	}

	$scope.init();

	$scope.newServiceFields = [
		{
			name: 'name',
			type: 'text',
			label: 'Service',
			order: 1
		},		
		{
			name: 'level',
			type: 'radio',
			label: 'Level',
			options: ["Begginer", "Intermediate", "Advanced"],
			order: 2
		},	
		{
			name: 'description',
			type: 'textarea',
			label: 'Description',
			order: 3
		},		
	]

});