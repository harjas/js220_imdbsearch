angular.module('imdbApp')
	.controller('detailsController', ['$scope', '$routeParams', 'imdbService', 'sharedProperties', '$location', '$mdDialog', 
		function($scope, $routeParams, imdbService, sharedProperties, $location, $mdDialog) {

			var movieId = $routeParams.id;
			//store an array of ids for pagination
			$scope.imdbIds = sharedProperties.getIMDBIds();
			//console.log($scope.imdbIds);
			if(movieId){
				getMovieDetails($scope, movieId);
			} else {
				//default to the first movie in the list
				getMovieDetails($scope,$scope.imdbIds[0]);
			}

			sharedProperties.setCurrentNavItem('details');
			

			function getMovieDetails($scope, mId) {
				imdbService.getOmdbDetails(mId).success(function(data){
					console.log(data);
					$scope.movieDetails = data;
					getMovieDetailKeys($scope);
					checkForPrevious($scope);
					checkForNext($scope);
				}).error(function(data,status){
					console.log(status);
				});
			}

			function getMovieDetailKeys($scope){
				$scope.movieDetailKeys = Object.keys($scope.movieDetails);
				console.log('Detail Keys ' + $scope.movieDetailKeys);
				//remove keys that are already used on the page
				var usedKeys = ['Title','Year','Response','Type','Poster','imdbID'];
				usedKeys.forEach(function(val){
					$scope.movieDetailKeys.splice($scope.movieDetailKeys.indexOf(val), 1);
				});
			}
			/*** not sure why i couldn't pass the $routeParams to the function below... kept on getting undefined for $routeParams

			console.log($routeParams.id);

			(function getMovieDetails($scope, $routeParams) {
				imdbService.getOmdbDetails($routeParams.id).success(function(data){
					console.log(data);
					$scope.movieDetails = data;
				}).error(function(data,status){
					console.log(status);
				});
			})();
			*/

			//pagination
			$scope.previous = function(){
				var previousMovieId;
				var previousIndex = $scope.imdbIds.indexOf($scope.movieDetails.imdbID) - 1;
				console.log(previousIndex);
				if (previousIndex >= 0 && previousIndex < $scope.imdbIds.length){
					previousMovieId = $scope.imdbIds[$scope.imdbIds.indexOf($scope.movieDetails.imdbID) - 1];
					//get previous movie
					getMovieDetails($scope, previousMovieId);
				}
				
			}


			$scope.next = function(){
				var nextMovieId;
				var nextIndex = $scope.imdbIds.indexOf($scope.movieDetails.imdbID) + 1;
				if(nextIndex < $scope.imdbIds.length){
					nextMovieId = $scope.imdbIds[$scope.imdbIds.indexOf($scope.movieDetails.imdbID) + 1];
					getMovieDetails($scope, nextMovieId);
				}
			}

			//start and end validation
			function checkForPrevious($scope) {
				var previousIndex = $scope.imdbIds.indexOf($scope.movieDetails.imdbID) - 1;
				console.log('Previous Movie Index: ' + previousIndex);
				if(previousIndex >= 0){
					$scope.disablePrevious = false;
				} else {
					$scope.disablePrevious = true;
				}
			}

			function checkForNext($scope) {
				var nextIndex = $scope.imdbIds.indexOf($scope.movieDetails.imdbID) + 1;
				if(nextIndex < $scope.imdbIds.length && nextIndex != -1){
					$scope.disableNext = false;
				} else {
					$scope.disableNext = true;
				}
			}
	}]);