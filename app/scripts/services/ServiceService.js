'use strict';

app.service("ServiceService", function($firebaseObject, $firebaseArray, firebaseRef){
  this.createService = function(serviceName){
  	var ref = new Firebase(firebaseRef).child('services').child(serviceName);
  	return $firebaseObject(ref);
  }
});