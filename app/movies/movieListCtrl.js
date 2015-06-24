(function() {
	
	'use strict';
	
	angular.module("movieHunter")
		.controller("MovieListCtrl",
			     ["movieResource", MovieListCtrl]);
					
	function MovieListCtrl(movieResource) {
                var data = this;
                	
                data.movies = [];
                data.title = "Search by Movie Title";
                data.showImage = false;
                
                data.toggleImage = function () {
                    data.showImage = !data.showImage;
                };
                
                movieResource.query(
                    function (responseData) {
                        data.movies = responseData;
                    },
                    function (response) {
                        data.message = response.message + "\r\n";
                        if (response.data && response.data.exceptionMessage)
                            data.message += response.data.exceptionMessage;
                    });
                    
               data.isValid = function () {
                   debugger
                   data.message = "Please correct the validation errors and try saving again.";
               }
	}
	
}());