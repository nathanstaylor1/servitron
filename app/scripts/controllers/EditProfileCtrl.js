'use strict';

app.controller('EditProfileCtrl', function ($scope, UserService, ServiceService) {

	$scope.init = function(){

		UserService.bindUserTo($scope, 'user');

	}

	$scope.init();

	$scope.profileFields = [

		{
			name: 'firstName',
			type: 'text',
			label: 'First Name',
			order: 1
		},
		{
			name: 'lastName',
			type: 'text',
			label: 'Last Name',
			order: 2
		},
		{
			name: 'gender',
			type: 'radio',
			label: 'Gender',
			options: ['Male', 'Female'],
			order: 3
		},
		{
			name: 'dob',
			type: 'date',
			label: 'Date of Birth',
			order: 4
		},
		{
			name: 'email',
			type: 'email',
			label: 'Email',
			order: 5
		},
		{
			name: 'address',
			type: 'text',
			label: 'Address',
			order: 6
		},
		{
			name: 'suburb',
			type: 'text',
			label: 'Suburb',
			order: 7
		},
		{
			name: 'state',
			type: 'select',
			label: 'State',
			options: ['VIC','NSW','QLD','ACT','WA','SA','TAS'],
			order: 8
		}
			
	]


});