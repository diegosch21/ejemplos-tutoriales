window.movieStubApp = angular.module('movieStubApp', ['ngRoute','ngResource']);

//CONTROLLER GENERAL: define $scope general, ya que se enlaza a body
movieStubApp.controller('movieStubController', ['$scope','movieStubFactory','$location',function($scope,movieStubFactory,$location){
	$scope.headerSrc = "tmpl/header.html";

	$scope.movies = movieStubFactory.query();	// pide al server lista de movies (mediante el service movieStubFactory que usa $resource)

	$scope.currMovie = null;

	$scope.getMovieById = function(id) {
		var movies = $scope.movies;
		for (var i = 0; i < movies.length; i++) {
			var movie = $scope.movies[i];
			if (movie.id == id) {
				$scope.currMovie = movie;
			}
		}
	}	

    // A simple back function, that will help us navigate between views
    $scope.back = function () {
    	window.history.back();
    };
    
    $scope.getCount = function (n) {
        return new Array(n);		// genera arreglo para repetir en la view (para mostrar cantidad de estrellitas)
    };

    $scope.isActive = function (route) {
    	return route === $location.path();
    }

    $scope.isActivePath = function (route) {
    	return ($location.path()).indexOf(route) >= 0;
    }
}]);


// Como el controller movieStubController está enlazado en body,
// los siguientes son "subcontrollers" y hereda el scope de movieStubController

// Controller enlazado por el router a movie.html (detalle movie)
movieStubApp.controller('movieDetailsController', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.getMovieById($routeParams.id);	//set currMovie
}]);

// Controller enlazado por el router a bookTickets.html (view con form para bookear tickets)
movieStubApp.controller('bookTicketsController', ['$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams){
	$scope.getMovieById($routeParams.id);	//set currMovie

	$scope.onlyNumbers = /^\d+$/;	//expresion regular para validacion
	$scope.formData = {};
	$scope.formData.movie_id = $scope.currMovie.id;
	$scope.formData.movie_name = $scope.currMovie.name;
	$scope.formData.date = "Today";
	// en el form de bookTickets.html se setea formData.qty y formData.date

	$scope.processForm = function () {
    	$http({
        	method: 'POST',
        	url: '/book',
        	data: $.param($scope.formData), // pass in data as strings (FUNCION JQUERY)
        	headers: {
            	'Content-Type': 'application/x-www-form-urlencoded'
        	} // set the headers so angular passing info as form data (not request payload)
    	})
        .success(function (data) {
            $location.path("/bookings");	//redirecciona a /bookings
        });
	}
	
}]);

// Controller enlazado por router a bookings.html (lista de bookings hechos en el server)
movieStubApp.controller('bookingDetailsController', ['$scope','movieStubBookingsFactory', function($scope,movieStubBookingsFactory){
	$scope.bookings = movieStubBookingsFactory.query();		// pide al server lista de bookings	
}])