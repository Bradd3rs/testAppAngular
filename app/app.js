'use strict';

// Defining Angular app model with all other dependent modules
var myApp = angular.module('myApp',[
	
	'ngRoute',
	'myApp.home',
	'myApp.map',
	'myApp.test'
]);

//Routing
myApp.config(function($routeProvider, $locationProvider, $httpProvider) {
	
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: 'components/views/homeView.html'
	})

	.when('/inventory', {
		controller: 'inventoryCtrl',
		controllerAs: 'inventory',
		templateUrl: 'components/views/inventoryView.html'
	})

	.when('/map', {
		controller: 'mapCtrl',
		templateUrl: 'components/views/mapView.html'
	})

	.when('/test', {
		controller: 'TestController',
		templateUrl: 'components/views/testView.html'
	})

	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	// disabling # in Angular urls
	// $locationProvider.html5Mode({
	// 		enabled: true,
	//      requireBase: false
	// });
});

myApp.run(function() {
	
});