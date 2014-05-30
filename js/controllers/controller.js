pv4.controller("HomeController", function ($scope) {




	console.log('home page');
});

pv4.controller("PortfolioController", function ($scope) {


	$scope.portfolio = 'active-nav';
	$scope.headbar = 'headbar-portfolio';




});

pv4.controller("SidebarController", function ($scope) {
	var toggleCounter = 0;

	$scope.sidebarToggle = function () {

			// var sbWidth = $('.sidebar').width(),
			// 	contWidth = $('.sidebar-container').width(),
			// 	percent = ((sbWidth/contWidth) *100),
			// 	left = percent + '%',
			// 	nleft = -percent + '%';

			if (toggleCounter === 0) {
				$('.sidebar').animate({left: '0'}, 400);
				$('.sidebar-button').animate({left: '75%'}, 400);
				toggleCounter = 1;
			} else {
				$('.sidebar').animate({left: '-75%'}, 400);
				$('.sidebar-button').animate({left: '0'}, 400);
				toggleCounter = 0;
			}

			console.log('you got TOGGLED');
	}
});

pv4.controller("ResumeController", function ($scope) {


	$scope.resume = 'active-nav';
});

pv4.controller("AboutController", function ($scope) {


	$scope.about = 'active-nav';
	$scope.headbar = 'headbar-about';

});