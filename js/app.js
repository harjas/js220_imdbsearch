//This is where application config goes
angular.module('imdbApp', ['ngRoute', 'imdbServices', 'imdbControllers']);

angular.module('imdbApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/list.html',
 			controller: 'ListController'
 		}).when('/gallery', {
 			templateUrl: 'templates/gallery.html'
 		}).when('/details', {
 			templateUrl: 'templates/details.html'
 		}).otherwise({
 			redirectTo: '/'
 		})
  }])
