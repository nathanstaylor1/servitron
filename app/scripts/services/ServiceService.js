'use strict';

app.service("ServiceService", function($firebaseObject, $firebaseArray, firebaseRef, AuthService){

  this.addService = function(serviceData){

  	//if service doesnt exist add new one otherwise return id
  	
	var ref = new Firebase(firebaseRef).child('services').child(serviceData.name)
	return $firebaseObject(ref).$loaded(function(data){
		data.name = serviceData.name;
		data.$save();
	})
  }

  this.removeUserService = function(serviceName){
  	var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().auth.uid).child('services').child(serviceName)
  	return $firebaseObject(ref).$loaded(function(data){
  		data.$remove(serviceName)
  	});
  }

  this.bindUserServicesTo = function($scope, location){
  	var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().auth.uid).child('services');
  	var syncObject = $firebaseObject(ref);
  	return syncObject.$bindTo($scope, location);	
  }

});