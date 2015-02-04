angular.module('app', ['components','ngLocale'])	/* components:
The app module declares a dependency on the components module, which ensures that the directives in the components module are also loaded into the application. */

.controller('BeerCounter', function($scope, $locale) {	/* $locale:
	The $locale service contains meta-data for the current locale. There are AngularJS locale modules available for each language locale combination. */
	$scope.beers = [0, 1, 2, 3, 4, 5, 6];	// Set up beers counting array. We will iterate over this array and see how the 'beers' count gets rendered for each count.
	if ($locale.id == 'en-us') {	// Create different pluralization rules based on locale. In an actual app, one would load a different module which would contain translation as well as localization rules for each language.
		$scope.beerForms = {	// Pluralization rules for English
			0: 'no beers',
			one: '{} beer',
			other: '{} beers'
		};
	} else if ($locale.id == 'es-ar') {	
		$scope.beerForms = {	// Pluralization rules for Argentina
			0: 'secos, sin birra',
			one: '{} birra',
			other: '{} birras'
		};
	} else	{
		$scope.beerForms = {
			0: 'žiadne pivo',
			one: '{} pivo',
			few: '{} pivá',
			other: '{} pív'
		};
	}
});