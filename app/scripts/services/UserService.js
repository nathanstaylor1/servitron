'use strict';

app.service("UserService", function($firebaseObject, $firebaseArray, firebaseRef, AuthService, $rootScope){
  this.getUser = function(userId){
    var ref = new Firebase(firebaseRef).child('users').child(userId)
    return $firebaseObject(ref)
  }
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
  this.getChats = function(){
    var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().auth.uid).child("chats")
    return $firebaseArray(ref)
  }
  this.getConvoWith = function(userId){
    var ref = new Firebase(firebaseRef).child('users').child(AuthService.$getAuth().auth.uid).child("chats").child(userId)
    return $firebaseObject(ref)
  }
  this.linkConvo = function(userId, withId, convoId){
    var ref = new Firebase(firebaseRef).child('users').child(userId).child("chats").child(withId)
    ref.set({ convoId: convoId});
    return $firebaseObject(ref)
  }
});