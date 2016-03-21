'use strict';

angular.module('makersBnb.new', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/new', {
    templateUrl: 'spaces/new.html',
    controller: 'AddSpaceCtrl'
  });
}])

.controller('AddSpaceCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.addSpace = function() {
    $http({
      url: 'http://localhost:3000/spaces',
      dataType: 'json',
      method: 'POST',
      data: {
        name: $scope.name,
        price: $scope.price,
        description: $scope.description
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    $location.path("/spaces/index");
    $route.reload();
  };
}]);