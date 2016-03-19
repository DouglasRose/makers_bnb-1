'use strict';

angular.module('makersBnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/new', {
    templateUrl: 'spaces/new.html',
    controller: 'AddSpaceCtrl'
  });
}])

.controller('AddSpaceCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Space name from form input: " + $scope.name);
  this.addSpace = function() {
    console.log("addSpace function called!");
    $http({
    url: 'http://localhost:3000/spaces',
    dataType: 'json',
    method: 'POST',
    data: {
        name: $scope.name
    },
    headers: {
        "Content-Type": "application/json"
    }

    }).success(function(response){
        // do something
    }).error(function(error){
        // do something
    });
  };
}]);