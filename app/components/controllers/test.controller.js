// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('myApp.test', ['ngRoute'])


// Controller definition for this module
.controller('TestController', ['$scope', function($scope) {

	this.message = "Hello Test!";

}]);

function TestController($scope, UserService) {
    $scope.name = UserService.name;
};