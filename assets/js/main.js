window.addEventListener("load",() =>{
    const checkBox = document.getElementById("switchCheck");
    const currentTheme = document.querySelector("html");

    themeSchema();
    
    checkBox.addEventListener("click", function () {
        if (checkBox.checked) {
            localStorage.setItem("themeSchema","dark");
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
        } else {
            localStorage.setItem("themeSchema","light");
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
        }
    })

    function themeSchema(){
        if(localStorage.getItem("themeSchema") == "dark"){
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema") );
            checkBox.checked = true;
        }else {
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            checkBox.checked = false;
        }
    }
})

let myDemoStreaming = angular.module('myDemoStreaming', ['ngRoute','ngAnimate']);

myDemoStreaming.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
        templateUrl: '/dist/home.html'
    })
    .when('/movies', {
        templateUrl: '/dist/movies.html',
        controller: 'moviesController'
    })
    .when('/series', {
        templateUrl: '/dist/series.html',
        controller: 'seriesController'
    })
    .when('/error', {
        templateUrl: '/dist/error.html',
        controller: 'errorController'
    })
    .when('/loading', {
        templateUrl: '/dist/loading.html',
        controller: 'loadingController'
    }).otherwise({
        redirectTo: '/home'
    });

}]);

myDemoStreaming.controller('myDemoStreaming', ['$scope', function($scope){

}])

myDemoStreaming.controller('moviesController', ['$scope', function($scope){
    let isim = 'mehmet';
}])

myDemoStreaming.controller('seriesController', ['$scope', function($scope){
    
}])

myDemoStreaming.controller('errorController', ['$scope', function($scope){
    
}])

myDemoStreaming.controller('loadingController', ['$scope', function($scope){
    
}])