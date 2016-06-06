angular.module('imdbControllers', [])

angular.module('imdbControllers')
.controller('ListController', function($scope, IMDBFactory) {
	IMDBFactory.getMovies().success(function(data) {
		$scope.movies = data;
		$scope.sorting = 'rank';
	});
	$scope.getMovies = function() {
		IMDBFactory.getMovies().success(function(data) {
			$scope.search = $scope.movieText;
			$scope.movies = data;
		});
	};

})