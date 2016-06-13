// add a service here that makes a call to the imdb250.json file
// this service will be utilized by your list controller


angular.module('imdbServices', []);

angular.module('imdbServices')
.factory('IMDBFactory', function($http) {
	return {
		getMovies: function() {
			return $http.get('/data/imdb250.json');
		}
	}
});