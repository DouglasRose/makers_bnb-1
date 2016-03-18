'use strict';

angular.module('makersBnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ['$scope', '$http', function($scope, $http) {
  // real getSpaces() function
  this.getSpaces = function() {
    $http.get("http://localhost:3000/spaces.json")
      .then(function(response){ 
        $scope.spaces = response.data; 
      });
  };

  // mock getSpaces() function
  // this.getSpaces = function() {
  //   return [{id: 1, name: "My lovely space"}, {id: 2, name: "My horrible space"}];
  // };

  $scope.spaces = this.getSpaces();
}]);