angular.module('starter.controllers', ['ngFileUpload'])

.controller('DashCtrl', function($scope,$ionicGesture) {


  $scope.data = { 'zoom' : 100 };
  
  var dragOffset = {
    x: 0,
    y: 0
  }
  
  $scope.draggedStyle = {}
  
  $scope.$watch('data.zoom',function() {
    console.log($scope.data.zoom);
     $scope.draggedStyle['zoom'] =  $scope.data.zoom + "%";
  },true)
  
  $scope.onDrag = function(event)  {

    
      console.log(event)
      $scope.draggedStyle["transform"] = "translate(" + (event.gesture.deltaX-dragOffset.x) + "px, " + (event.gesture.deltaY-dragOffset.y) + "px)"
      $scope.draggedStyle["-webkit-transform"] = "translate(" + (event.gesture.deltaX-dragOffset.x) + "px, " + (event.gesture.deltaY-dragOffset.y) + "px)"
      
    }
  
  $scope.onRelease = function(event)  {
        dragOffset = {
          x: dragOffset.x-event.gesture.deltaX,
          y: dragOffset.y-event.gesture.deltaY
        }
    }
  
  $scope.upload = function (file) {
    
    console.log("file upload");
    
    $scope.file = file;
    
//        Upload.upload({
//            url: 'upload/url',
//            fields: {'username': $scope.username},
//            file: file
//        }).progress(function (evt) {
//            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
//        }).success(function (data, status, headers, config) {
//            console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
//        }).error(function (data, status, headers, config) {
//            console.log('error status: ' + status);
//        })
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
