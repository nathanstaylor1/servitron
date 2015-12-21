'use strict';

app.controller('EditServicesCtrl', function ($scope, UserService, ServiceService, $rootScope) {

	$scope.init = function(){

		$scope.newServiceData = {};

		ServiceService.bindUserServicesTo($scope, 'services');

	}

	$scope.addService = function(){

	  if (!$scope.newServiceData.name){
        $scope.error = 'Enter a Name';
      }else if (!$scope.newServiceData.level){
        $scope.error = 'Select a Level';
      }else if (!$scope.newServiceData.description){
        $scope.error = 'Enter a Description';
      }else{

      	ServiceService.addService($scope.newServiceData);

      	$scope.services[$scope.newServiceData.name] = $scope.newServiceData;
      	$scope.newServiceData = {};

      }

	}

	$scope.removeService = function(service){
		ServiceService.removeUserService(service.name);
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