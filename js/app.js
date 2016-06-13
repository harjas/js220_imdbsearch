//This is where application config goes
angular.module('imdbApp', ['ngRoute', 'imdbServices', 'imdbControllers']);

angular.module('imdbApp')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
	templateUrl: 'templates/list.html',
		controller: 'ListController',
		activetab: 'list'
	}).when('/gallery', {
		templateUrl: 'templates/gallery.html',
		activetab: 'gallery'
	}).when('/details/:id', {
		templateUrl: 'templates/details.html',
		controller: 'DetailsController',
		activetab: 'details'
	}).otherwise({
		redirectTo: '/'
	})
}])
// dsa