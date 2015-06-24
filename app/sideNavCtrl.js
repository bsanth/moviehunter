(function () {
	angular.module("movieHunter")
		.controller("SideNavCtrl", ['$location', sideNavCtrl]);
		
	function sideNavCtrl($location) {
		var sidenav = this;
		sidenav.$location = $location;
	}
}());