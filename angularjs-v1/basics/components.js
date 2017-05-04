// Definicion de directivas para localization-pluralization.html

angular.module('components', [])

.directive('tabs', function() {	/* directive:
Use the module's directive() method to define new HTML vocabulary for our components
Define the <tabs> component. */
	return {
		restrict: 'E',	// The restrict specifies the HTML format of the component. In this case the <tabs> must be an HTML element. 
		transclude: true, // Specifies that when AngularJS replaces the <tabs> element with the expanded HTML that it should place the original content somewhere specified by an ng-transclude directive (see below). 
		scope: {}, /* Our component needs to have a private scope so that its view properties are not accidentally modified outside the <tabs>. 
						If you do need to expose attributes, you can declare input/output attributes. See the <pane> component below for an example. */
		controller: function($scope, $element) { /* 
			controller: Just like with the application, the component can have a controller that provides the component's behavior. 
			$scope: Current scope of the component.
			$element: Current DOM element of the component. */
			var panes = $scope.panes = [];

			$scope.select = function(pane) {	// Publish a select() method which will be used by the view to switch between tabs. 
				angular.forEach(panes, function(pane) {
					pane.selected = false;
				});
				pane.selected = true;
			}

			this.addPane = function(pane) { /* addPane:
				Components often need to collaborate together as a unit. In our case the <pane> will use the addPane() method to be register itself with its <tabs> container. */
				if (panes.length == 0) $scope.select(pane);
				panes.push(pane);
			}
		},
		template: /* The template is the HTML which needs to be rendered by the browser instead of the <tabs> placeholder. 
					Notice that the HTML in this template can have other directives within it. */
			'<div class="tabbable">' +
				'<ul class="nav nav-tabs">' +
					'<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+ // ng-class: We set the active CSS class to show the currently active tab
						'<a href="" ng-click="select(pane)">{{pane.title}}</a>' + //ng-click: Select the clicked tab.
					'</li>' +
				'</ul>' +
				'<div class="tab-content" ng-transclude></div>' + //ng-transclude: Marks the location where the contents of the <tabs> element will be placed.
			'</div>',
		replace: true // Tells AngularJS that the original <tabs> element should be replaced with the template rather than appending to it.
	};
})

.directive('pane', function() {
	return {
		require: '^tabs', // Specify that the <pane> component must be inside a <tabs> component. This gives the <pane> component to access to the <tabs>' controller methods -- the addPane() method in this case.
		restrict: 'E',
		transclude: true,
		scope: { title: '@' },
		link: function(scope, element, attrs, tabsCtrl) { // tabsCtrl: As we've specified we require the <tabs> as our container, we get passed its controller instance.
			tabsCtrl.addPane(scope);
		},
		template:
			'<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
			'</div>',
		replace: true
	};
})