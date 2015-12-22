'use strict';

app.service("UserService", function($firebaseObject, $firebaseArray, firebaseRef, AuthService, $rootScope){
  this.createUser = function(userId){
  	var ref = new Firebase(firebaseRef).child('users').child(userId);
  	return $firebaseObject(ref);
  }
  this.bindAuthUserTo = function($scope, location){
  	var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().auth.uid);
  	var syncObject = $firebaseObject(ref);
  	return syncObject.$bindTo($scope, location);
  }
  this.bindUserTo = function($scope, location, uid){
    var ref = new Firebase(firebaseRef).child('users').child(uid);
    var syncObject = $firebaseObject(ref);
    return syncObject.$bindTo($scope, location);
  }
  this.bindAllUsersTo = function($scope, location){
  	var ref = new Firebase(firebaseRef).child('users');
  	var syncObject = $firebaseObject(ref);
  	return syncObject.$bindTo($scope, location);
  }
});