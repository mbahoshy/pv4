pv4.controller("HomeController", function ($scope, $location, $http) {




	console.log('home page');
});

pv4.controller("PortfolioController", function ($scope, $location, $http) {

	var toggleCounter = 0;

	$scope.sidebarToggle = function () {

		var sbWidth = $('.sidebar').width(),
			contWidth = $('.sidebar-container').width(),
			percent = ((sbWidth/contWidth) *100),
			left = percent + '%',
			nleft = -percent + '%';

		if (toggleCounter === 0) {
			$('.sidebar').animate({left: '0'}, 400);
			$('.sidebar-button').animate({left: left}, 400);
			toggleCounter = 1;
		} else {
			$('.sidebar').animate({left: nleft}, 400);
			$('.sidebar-button').animate({left: '0'}, 400);
			toggleCounter = 0;
		}

		console.log('you got TOGGLED');
	}


});