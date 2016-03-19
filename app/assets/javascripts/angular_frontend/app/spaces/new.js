'use strict';

angular.module('makersBnb.new', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/new', {
    templateUrl: 'spaces/new.html',
    controller: 'AddSpaceCtrl'
  });
}])

.controller('AddSpaceCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.addSpace = function() {
    $http({
    url: 'http://localhost:3000/spaces',
    dataType: 'json',
    method: 'POST',
    data: {
        name: $scope.name,
        price: $scope.price
    },
    headers: {
        "Content-Type": "application/json"
    }

    }).success(function(response){
        // do something
    }).error(function(error){
        // do something
    });
    console.log("Name coming from form input: " + $scope.name);
  };
}]);