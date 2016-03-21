'use strict';

// Declare app level module which depends on views, and components
angular.module('makersBnb', [
  'ngRoute',
  'makersBnb.index',
  'makersBnb.new'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/spaces/index'});
}]);
