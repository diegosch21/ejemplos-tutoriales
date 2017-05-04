movieStubApp.factory('movieStubFactory', ['$resource', function($resource){
	return $resource('/movies');
}]);
movieStubApp.factory('movieStubBookingsFactory', ['$resource', function($resource) {
    return $resource('/bookings');
}]);