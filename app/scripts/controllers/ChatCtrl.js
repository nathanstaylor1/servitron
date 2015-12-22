'use strict';

app.controller('ChatCtrl', function ($scope, $stateParams, UserService, ChatService, AuthService) {

	if ($stateParams.uid){
		UserService.bindUserTo($scope, 'otherUser', $stateParams.uid);

		UserService.getConvoWith($stateParams.uid).$loaded(function(withUser){

			//check if convo is already started
			if (withUser.$value !== null){

				ChatService.bindConvoTo($scope, 'convo', withUser.convoId).then(function(){
					if (!$scope.convo.messages)
						$scope.convo.messages = {};
				})

			}else{

				startConvo($stateParams.uid);

			}

		})

	}

	//init user sidebar
	$scope.chatList = [];

	UserService.getChats().$loaded(function(chats){

		angular.forEach(chats, function(chatData){

			//get name,userId and lastmessage data for each chat
			var otherUserId = ChatService.getConvoUsers(chatData.convoId).$loaded(function(convo){

				convo.users.forEach(function(userId){

					if (userId != AuthService.$getAuth().auth.uid){

						UserService.getUser(userId).$loaded(function(userData){

							$scope.chatList.push({
								userId: userId,
								userName: userData.profile.firstName,
								lastMessage: {
									time: Math.random(),
									content: ""
								}
							});

						})

					}

				})



			})


		})
	})

	$scope.sendMessage = function(){

		var timeStamp = Date.now();

		if ($scope.messageContent != "");

		$scope.convo.messages[timeStamp] = {
			content: $scope.messageContent,
			sentBy: AuthService.$getAuth().auth.uid,
			sentAt: timeStamp,
			seen: false
		}

		$scope.messageContent = "";


	}

	var startConvo = function(withUser){

		var newConvo = ChatService.createConvo($stateParams.uid)
		ChatService.bindConvoTo($scope, 'convo', newConvo.$id).then(function(){
			$scope.convo.messages = {};	
		})

		//link to current User
		UserService.linkConvo(AuthService.$getAuth().auth.uid, withUser, newConvo.$id);
		//link to other User
		UserService.linkConvo(withUser, AuthService.$getAuth().auth.uid, newConvo.$id);

	}




});