app.controller('answerController', function($scope, sessionFactory, answerFactory, questionFactory, $location, $routeParams) {
    $scope.answers = [];
    console.log('answers.js controller hit');
    $scope.newAnswer = {
    message: '',
    question_id: '',
    user_id: ''
    };

    if (!sessionFactory.session) {
        sessionFactory.getSession(function(session){
          if (!session) $location.url('/');
        })
    };

    answerFactory.find($routeParams._id, function(data) {
        console.log('hit answer.js factory');
        $scope.answer = data
    })
    // console.log($routeParams);
    $scope.createAnswer = function(answerInput) {
        console.log('hit createAnswer');
		$scope.newAnswer.message = answerInput;
       	answerFactory.createAnswer($scope.newAnswer, function(data) {
          answerFactory.index(function(answers) {
            $scope.answers = answers;
          });
        })
        answerFactory.find($routeParams._id, function(data) {
          $scope.answer = data
        })
    }
});
