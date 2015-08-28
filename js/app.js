var app = angular.module('Chat', ['firebase','ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "views/chat.html",
            controller: "ChatBox"
        })
        .otherwise ({
        redirectTo: "/"
    });

});