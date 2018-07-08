angular.module("testApp")
	.constant("testsDataUrl", "https://github.com/serge-resume-web-dev/serge-resume-web-dev.github.io/blob/master/myApp/app-data/tests.json")
	.controller("mainCtrl", function ($scope, testsDataUrl, $http) {

	$scope.test = [] ;	
	$http({method: "get", url: testsDataUrl})
	.then(function (success) {
		$scope.test = success.data;
		
	},
	function (error) {		
		$scope.data.error = error;
	});

	$scope.startTest = function (testName) {
		
		switch(testName){
			case "Test A" : $scope.showTest = "testA"; $scope.pageView = 'myApp/partials/testA_q1.html'
			break;
			case "Test B" : $scope.showTest = "testB"; $scope.pageView = 'myApp/partials/testB_q1.html'
			break;
			case "Test C" : $scope.showTest = "testC"; $scope.pageView = 'myApp/partials/testC_q1.html'
			break;
		} 
	};

	$scope.backToStart = function () {
		$scope.showTest = false;
	}  
		
	});//end controller