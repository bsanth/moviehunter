(function () {
	angular.module("movieHunter")
		.controller("MainCtrl", ['$location', '$mdSidenav', mainCtrl]);
		
	function mainCtrl($location, $mdSidenav) {
		var scope = this;
		scope.$location = $location;
		
		scope.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		  };
		  
		scope.navigateTo = function(path){
			$location.path(path);
			scope.toggleSidenav('left');
		};
	}
}());