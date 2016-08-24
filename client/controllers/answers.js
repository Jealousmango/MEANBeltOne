app.controller('answersController', function($scope, sessionFactory, answerFactory, $location) {
  $scope.answers = [];
  $scope.newAnswer = {
    message: '',
    question_id: '',
    user_id: ''
  };

  //check if session variable is set
  if (!sessionFactory.session) {
    //if not set, see if back end has it set
    sessionFactory.getSession(function(session){
      //if back end does not have it set either, probably means they need to log in
      if (!session) $location.url('/');
    })
  };

  $scope.createAnswer = function(answerInput) {
		$scope.newAnswer.message = answerInput;
    // $scope.newAnswer.description = descriptionInput;
    // newAnswer.answer_id = answer_id;
		// newAnswer.user_id = name._id;
  	answerFactory.createAnswer($scope.newAnswer, function(data) {
      console.log(data);
      answerFactory.index(function(answers) {
        $scope.answers = answers;
      });
		})
	}

  answerFactory.index(function(answers) {
    $scope.answers = answers;
  });
});
