let myDemoStreaming = angular.module('myDemoStreaming', ['ngRoute','ngAnimate']);

myDemoStreaming.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/dist/home.html',
            controller: 'mainController'
        })
        .when('/movies', {
            templateUrl: '/dist/movies.html',
            controller: 'mainController'
        })
        .when('/series', {
            templateUrl: '/dist/series.html',
            controller: 'mainController'
        }).otherwise({
            redirectTo: '/home'
        });

}]);

myDemoStreaming.controller('mainController',['$scope','$http',function($scope,$http){
    $scope.loaded = false;
    $http.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then(function(res){
    $scope.myDemoStreaming = res.data.entries;
    $scope.loaded = true;
    }).catch(err => {
        $scope.error = "Oops something went wrong...";
    })
}])