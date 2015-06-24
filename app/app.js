(function () {
	'use strict';
	var app = angular.module("movieHunter",["ngMaterial", "ngRoute", "common.services",
                                             "movieResourceMock"]);
	
	app.config(["$routeProvider", 
        function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl : "app/welcomeView.html"
                })
                .when("/movies", {
                    templateUrl : "app/movies/movieListView.html",
                    controller : "MovieListCtrl as data"
                })
                .when("/showDetail/:movieId", {
                    templateUrl : "app/movies/movieDetailView.html",
                    controller : "MovieDetailCtrl as data"
                })
                .otherwise("/");
	}]);
}());