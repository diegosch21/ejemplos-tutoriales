angular.module('todoApp', [])
	.controller('TodoController', 	/* TodoController:
	The controller is the code behind the view. You can clearly see your application behavior because there is no DOM manipulation or framework specific boilerplate. Just simple, readable JavaScript. */
		['$scope', function($scope) { /* $scope:
		$scope contains your model data. It is the glue between the controller and the view. The $scope is just one of the services that can be injected into the controller. */
			$scope.todos = [ /* todos:
			We are creating the model with two initial todo items. Notice that you simply assign your model to the $scope and AngularJS reflects the state in the UI automatically. The model data is a Plain-Old-JavaScript-Object no need to wrap it in proxy or accesses the property through special setter methods. */
				{text:'learn angular', done:true},
				{text:'build an angular app', done:false}];

			$scope.addTodo = function() { /* addTodo:
			We are assigning the behavior into the $scope so that the ng-submit can invoke it. */
				$scope.todos.push({text:$scope.todoText, done:false}); /* push:
				This is just the Array.push method. Calling it updates the model, which then updates the view through data-binding. The ng–repeat is bound to this array. It automatically unrolls the array and adds the new DOM element into the view. (see ng–repeat in todo.html) */
				$scope.todoText = ''; /* '' :
				Writing to the form controls is just as easy. The data-binding will clear the control for us. */
			};

			$scope.remaining = function() { /* remaining
			This is a computed property. No need to define its dependencies or worry about when it needs to be updated. */
				var count = 0;
				angular.forEach($scope.todos, function(todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			$scope.archive = function() {
				var oldTodos = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldTodos, function(todo) {
					if (!todo.done) $scope.todos.push(todo);
				});
			};
		}]
	);