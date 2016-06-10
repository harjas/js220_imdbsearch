
angular.module('imdbApp', ['ngRoute', 'services', 'sharedService', 'ngMaterial']);

angular.module('imdbApp')
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/list', {
    	templateUrl: 'templates/list.html'
    })
    .when('/gallery', {
    	templateUrl: 'templates/gallery.html'
    })
    .when('/details', {
        templateUrl: 'templates/details.html'
    })
    .when('/details/:id', {
    	templateUrl: 'templates/details.html'
    })
    .otherwise({
    	redirectTo: '/list'
    });

angular.module('imdbApp')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '400',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            });
    });
  }]);

  