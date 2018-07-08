angular.module("testApp")
	.controller("checkAnswersCtrl", function ($scope) {
		$scope.score = 0;
		$scope.getPercentage = 30; //progress-bar
		$scope.checkAnswer1 = function (ind, testRef, answer) {
					
			if (answer==$scope.test[ind].right_answer1) {
			
				$scope.score++;
			}
				
			$scope.pageView = 'myApp/partials/' + testRef + '_q2.html';
			$scope.getPercentage = 60; //progress-bar
		};

		$scope.checkAnswer2 = function (ind, testRef, answer) {
						
			if (answer==$scope.test[ind].right_answer2) {
				
				$scope.score++;
			}
			
			$scope.pageView = 'myApp/partials/' + testRef + '_q3.html';
			$scope.getPercentage = 90;//progress-bar
		};

		$scope.checkAnswer3 = function (ind, testRef, answer) {
					
			if (answer==$scope.test[ind].right_answer3) {
		
				$scope.score++;
			}
				
			$scope.pageView = 'myApp/partials/'+ testRef + '_result.html';
			$scope.getPercentage = 100;//progress-bar
		};
	});//end controller