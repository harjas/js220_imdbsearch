// add a service here that makes a call to the imdb250.json file
// this service will be utilized by your list controller
angular.module('services', [])

angular.module('services').factory('imdbService', function($http) {
	return {
		getImdbJson: function() {
			return $http.get('/data/imdb250.json');
		},

		getOmdbDetails: function(id) {
			return $http.get('http://www.omdbapi.com/?i=' + id + '&plot=short&r=json');
		}
	}
});