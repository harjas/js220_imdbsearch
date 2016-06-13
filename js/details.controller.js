angular.module('imdbControllers')
.controller('DetailsController', function($scope, $routeParams, $route, IMDBFactory) {
	$scope.$route = $route;
	IMDBFactory.getMovies().success(function(data) {
		$scope.movies = data;
		$scope.movie = $scope.movies[$routeParams.id-1];
	})
})