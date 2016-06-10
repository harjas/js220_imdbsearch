angular.module('imdbApp')
	.controller('navbarController', ['$scope', 'sharedProperties', function($scope, sharedProperties) {

		//$scope.currentNavItem = sharedProperties.getCurrentNavItem();
		var updateCurrentNavItem = function() {
			$scope.currentNavItem = sharedProperties.getCurrentNavItem();
		}

		sharedProperties.registerListener(updateCurrentNavItem);

	}]);