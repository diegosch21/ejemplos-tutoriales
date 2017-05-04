/* project:
This defines the project module. You use modules to configure existing services, and define new services, directives, filters, and so on.
Here, we’ll set up ‘routes’ that map URLs to partials. AngularJS watches the browser location and automatically updates the partial when the URL changes. */
angular.module('project', ['ngRoute', 'firebase'])	  /* firebase:
Modules can depend on other modules. Here, project needs firebase which handles the persistence for this application. */

.value('fbURL', 'https://ng-projects-list.firebaseio.com/') /* value:
Define a singleton object that can be injected into controllers and services. */
	/* fbURL:
	The URL to the Firebase location from which we want to load data (and store changes). */
.service('fbRef', function(fbURL) {
	return new Firebase(fbURL)
})
.service('fbAuth', function($q, $firebase, $firebaseAuth, fbRef) { /* $firebase:
	A service provided by AngularFire for binding data from Firebase to Angular models*/
	var auth;
	return function () {
		if (auth) return $q.when(auth); /* when:
		When the URL is / it will load list.html into the view and attach the ListCtrl controller. 
		You can instantly get an overview of an app's structure by reading the route definitions. */
		var authObj = $firebaseAuth(fbRef);
		if (authObj.$getAuth()) {
			return $q.when(auth = authObj.$getAuth());
		}
		var deferred = $q.defer();
		authObj.$authAnonymously().then(function(authData) {
			auth = authData;
			deferred.resolve(authData);
		});
		return deferred.promise;
	}
})

.service('Projects', function($q, $firebase, fbRef, fbAuth) { /* Projects
	Projects is an instance of $firebase, and is defined in the projects module. 
	It exposes method to add, remove and update projects in the collection. Its purpose is to abstract the server communication. 
	This lets the controller focus on the behavior rather than the complexities of server access. */
	var self = this;
	this.fetch = function () {
		if (this.projects) return $q.when(this.projects);
		return fbAuth().then(function(auth) {
			var deferred = $q.defer();
			var ref = fbRef.child('projects/' + auth.auth.uid);
			var $projects = $firebase(ref);
			ref.on('value', function(snapshot) {
				if (snapshot.val() === null) {  /* null:
				We can delete an object by simply setting its value to null. */
					$projects.$set(window.projectsArray);
				}
				self.projects = $projects.$asArray();	 /* $asArray
				A method that returns data from Firebase in the form of a synchronized array */
				deferred.resolve(self.projects);
			});
			return deferred.promise;
		});
	};
})

.config(function($routeProvider) {	/* config:
You use config() to configure existing services. 
Here, we’re configuring the $routeProvider responsible for mapping URL paths to partials. */
	$routeProvider
	.when('/', {
		controller:'ListCtrl',	/* controller:
		Define a controller function that can be attached to the DOM using ng-controller or to a view template by specifying it in the route configuration.*/
		templateUrl:'list.html',
		resolve: {
			projects: function (Projects) {
				return Projects.fetch();
			}
		}
	})
	.when('/edit/:projectId', { /* /edit/:projectId
	This route definition has a colon ':' in it. You use colons to make a component of the URL available to your controller. 
	So now, EditCtrl can refer to the projectId property which tells it which project to edit. */
		controller:'EditCtrl',
		templateUrl:'detail.html'
	})
	.when('/new', {
		controller:'CreateCtrl',
		templateUrl:'detail.html'
	})
	.otherwise({  /* otherwise
	The otherwise route specifies which view to display when the URL doesn’t match any of the explicit routes. It’s the default. */
		redirectTo:'/'
	});
})

.controller('ListCtrl', function($scope, projects) { /* $scope:
	We can immediately assign the set of projects to our scope, and they will be displayed in the view. */
	$scope.projects = projects;
})

.controller('CreateCtrl', function($scope, $location, Projects) { /* $location:
	You use the $location service to access the browser's location */
	$scope.save = function() { /* save:
		Called when the user clicks the save button in the view */
		Projects.projects.$add($scope.project).then(function(data) {
			$location.path('/');	 /* path
			Use the path method to change the application's 'deep-linking' location. 
			Changing the URL will automatically activate the new route, and transition the application to display that view -- in this case, the /edit/ view. */
		});
	};
})

.controller('EditCtrl',
	function($scope, $location, $routeParams, Projects) { /* $routeParams:
		Here, we ask AngularJS to inject the $routeParams service. We use it to access the parameters extracted from the route path definitions. */
		var projectId = $routeParams.projectId,	/* projectId:
			This extracts the projectId from the URL. This allows the controller to use deep-linking information for processing. */
			projectIndex;

		$scope.projects = Projects.projects;
		projectIndex = $scope.projects.$indexFor(projectId);
		$scope.project = $scope.projects[projectIndex];

		$scope.destroy = function() { /* destroy
			Called when the user clicks the delete button in the view */
			$scope.projects.$remove($scope.project).then(function(data) {
				$location.path('/');
			});
		};

		$scope.save = function() {
			$scope.projects.$save($scope.project).then(function(data) {
				$location.path('/');
			});
		};
	});