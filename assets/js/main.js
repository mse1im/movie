window.addEventListener("load", () => {
    const checkBox = document.querySelectorAll(".switchCheck");
    const currentTheme = document.querySelector("html");
    let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    let mobileNav = document.getElementsByClassName("nav-mobile")[0];

    /* hamburger-menu */
    hamburgerMenu.addEventListener("click", () => {

        if (hamburgerMenu.classList.contains("open")) {
            mobileNav.classList.remove("d-block")
            mobileNav.classList.add("d-none")
            hamburgerMenu.classList.remove("open");
        } else {
            hamburgerMenu.classList.add("open");
            mobileNav.classList.remove("d-none")
            mobileNav.classList.add("d-block")
        }
    })
    themeSchema();

    checkBox.forEach(item => {
        item.addEventListener("click", function () {
            if (item.checked) {
                localStorage.setItem("themeSchema", "dark");
                currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            } else {
                localStorage.setItem("themeSchema", "light");
                currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            }
        })
    })

    function themeSchema() {
        if (localStorage.getItem("themeSchema") == "dark") {
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            checkBox.forEach(item => {
                item.checked = true;
            })
        } else {
            currentTheme.setAttribute("data-theme", localStorage.getItem("themeSchema"));
            checkBox.forEach(item => {
                item.checked = false;
            })
        }
    }
})

let myDemoStreaming = angular.module('myDemoStreaming', ['ngRoute','ngAnimate']);

myDemoStreaming.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/dist/home.html',
        })
        .when('/movies', {
            templateUrl: '/dist/movies.html',
            controller: 'moviesController'
        })
        .when('/series', {
            templateUrl: '/dist/series.html',
            controller: 'seriesController'
        }).otherwise({
            redirectTo: '/home'
        });

}]);

myDemoStreaming.controller('moviesController',['$scope','$http',function($scope,$http){
    $scope.loaded = false;
    $http.get("assets/data/data.json").then(function(res){
    $scope.myDemoStreaming = res.data[0].entries;
    $scope.loaded = true;
    }).catch(err => {
        $scope.error = "Oops something went wrong...";
    })
}])

myDemoStreaming.controller('seriesController',['$scope','$http',function($scope,$http){
    $scope.loaded = false;
    $http.get("assets/data/data.json").then(function(res){
    $scope.myDemoStreaming = res.data[0].entries;
    $scope.loaded = true;
    }).catch(err => {
        $scope.error = "Oops something went wrong...";
    })
}])