'use strict';

app.service("UserService", function($firebaseObject, $firebaseArray, firebaseRef){
  this.createUser = function(userId){

  	var ref = new Firebase(firebaseRef).child('users').child(userId);
  	return $firebaseObject(ref);

  }
});