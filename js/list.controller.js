angular.module('imdbApp')
	.controller('listController', ['$scope', 'imdbService', 'sharedProperties', '$location', '$mdDialog', 
		function($scope, imdbService, sharedProperties, $location, $mdDialog){

		$scope.movies = [];
		//$scope.showGrid = false;
		$scope.sort = 'rank';
		imdbService.getImdbJson().success(function(data){
			//generateCovers(data);
			$scope.movies = data;
			//set shared properties
			if(sharedProperties.getIMDBIds().length === 0){
				sharedProperties.setIMDBIds(generateIMDBIdList($scope.movies));
				console.log('set imdb ids on first load.');
			}
			
		});

		sharedProperties.setCurrentNavItem('list');
		/*
		$scope.toggleGrid = function(){
			if($scope.search.title) {
				$scope.showGrid = true;
			} else {
				$scope.showGrid = false;
			}
		}

		$scope.galleryPage = function(p){
			$location.path(p);
		}
		*/

		$scope.moreDetailsPage = function(p){
			console.log($location.path(p));
			$location.path(p);
			//set nav bar item
			sharedProperties.setCurrentNavItem('details');
		}

		$scope.showDetails = function(ev, imdbId) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'details.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				locals: {
					movies: $scope.movies,
					imdbId: imdbId
				}
			});
		}

		$scope.sortMovies = function(sortBy) {
			$scope.sort = sortBy;
		}

		function generateIMDBIdList(movies) {
			var movieIds = movies.map(function(val) {
				return val.imdbID;
			})
			//console.log('Array of movieIds: ' + movieIds);
			return movieIds;
		}

		function DialogController($scope, $mdDialog, movies, imdbId, imdbService) {
			$scope.movies = movies;
			console.log('ImdbId: ' + imdbId);

			imdbService.getOmdbDetails(imdbId).success(function(data) {
				console.log(data);
				$scope.selectedMovie = data;
				$scope.selectedMoviePoster = 'data/images/' + $scope.selectedMovie.imdbID + '.jpg';
				console.log($scope.selectedMoviePoster);
			})
			//$scope.selectedMovie = $scope.movies[index];
			$scope.hide = function() {
				$mdDialog.hide();
			};
		}

		/****
		Playing around with grid lists in angular-material for the covers,
		but decided not to use as it was displaying the covers in a weird way

		function generateCovers(d){
			angular.forEach(d,function(val){
				$scope.movies.push({
					movie: val,
					cover: {
						colSpan: randomSpan(),
						rowSpan: randomSpan()
					} 
				});
			});
		}

		/*
		function randomSpan(){
			var val = Math.random();
			var span;

			if(val > 0.7){
				span = 1;
			} else if (val < 0.8){
				span = 2;
			} else {
				span = 3;
			}
			//console.log(span);
			return span;
		}
		****/

	}]);