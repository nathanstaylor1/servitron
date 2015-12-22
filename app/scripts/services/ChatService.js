'use strict';

app.service("ChatService", function($firebaseObject, $firebaseArray, firebaseRef, AuthService){

  this.bindConvoTo = function($scope, location, convoId){
    var ref = new Firebase(firebaseRef).child('chats').child(convoId);
    var syncObject = $firebaseObject(ref);
    return syncObject.$bindTo($scope, location);
  }

  this.createConvo = function(otherUser){

    var ref = new Firebase(firebaseRef).child('chats')
    var newConvoRef = ref.push();
    newConvoRef.set({ 
      users: [AuthService.$getAuth().auth.uid, otherUser]
    });
    return $firebaseObject(newConvoRef);

  }

  this.getConvoUsers = function(convoId){
    var ref = new Firebase(firebaseRef).child('chats').child(convoId)
    return $firebaseObject(ref)
  }



});