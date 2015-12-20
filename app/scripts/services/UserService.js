'use strict';

app.service("UserService", function($firebaseObject, $firebaseArray, firebaseRef, AuthService){
  this.createUser = function(userId){
  	var ref = new Firebase(firebaseRef).child('users').child(userId);
  	return $firebaseObject(ref);
  }
  this.bindUserTo = function($scope, location){
  	var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().uid);
  	var syncObject = $firebaseObject(ref);
  	return syncObject.$bindTo($scope, location);
  }
});