app.controller("ChatBox", function ($scope, $firebaseArray) {
 var logs = new Firebase('https://jenan-chat.firebaseio.com/chatlog');
    $scope.chatLogs = $firebaseArray(logs);
    $scope.boolean = true;

    $scope.submitPost = function () {
        $scope.chatLogs.$add({
            username: $scope.username,
            url: $scope.url,
            message: $scope.message
        });
        $scope.username = '';
        $scope.url = '';
        $scope.message = '';
    };

    $scope.removePost = function (post) {
        $scope.chatLogs.$remove(post)
    };

    $scope.editPost = function () {
        $scope.boolean = false;
    };

    $scope.updatePost = function () {
        $scope.boolean = true;
    };
});