// pv4.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
pv4.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/home-view.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/about-me', {
		templateUrl: '../views/about-me-view.html',
		controller: 'AboutController'
	});
	$routeProvider.when('/portfolio', {
		templateUrl: '../views/portfolio-view.html',
		controller: 'PortfolioController'
	});
	$routeProvider.when('/resume', {
		templateUrl: '../views/resume-view.html',
		controller: 'ResumeController'
	});
	// $routeProvider.when('/seattle-properties/:neighborhood/:size/:price', {
	// 	templateUrl: '../views/map-view.html',
	// 	controller: 'mapController'
	// });
	// $routeProvider.when('/seattle-residential/:id', {
	// 	templateUrl: '../views/residential-view.html',
	// 	controller: 'residentialController'
	// });
	// $routeProvider.when('/property-owner-page', {
	// 	templateUrl: '../views/property-owner-page-view.html',
	// 	controller: 'propertyOwnerPageController'
	// });
	
	// $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

}]);