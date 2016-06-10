angular.module('sharedService', [])
	
angular.module('sharedService').factory('sharedProperties', function() {
		var imdbIds = [];
		var currentNavItem;

		var listeners = [];

		var notifyListeners = function() {
			angular.forEach(listeners, function(callback) {
				callback();
			})
		}

		return {
			getIMDBIds: function() {
				return imdbIds;
			},
			setIMDBIds: function(value) {
				imdbIds = value;
			},
			getCurrentNavItem: function() {
				return currentNavItem;
			},
			setCurrentNavItem: function(value) {
				currentNavItem = value;
				notifyListeners();
			},
			registerListener: function(callback){
			listeners.push(callback);
			}
		}
	});