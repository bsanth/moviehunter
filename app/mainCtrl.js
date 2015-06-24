(function () {
	angular.module("movieHunter")
		.controller("MainCtrl", ['$location', mainCtrl]);
		
	function mainCtrl($location) {
		var sidenav = this;
		sidenav.$location = $location;
	}
}());