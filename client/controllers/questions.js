app.controller('questionsController', function($scope, sessionFactory, questionFactory, $location) {
  $scope.questions = [];
  $scope.newQuestion = {
    title: '',
    description: '',
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

  $scope.createQuestion = function(questionInput, descriptionInput) {
		$scope.newQuestion.title = questionInput;
    $scope.newQuestion.description = descriptionInput;
    // newQuestion.question_id = question_id;
		// newQuestion.user_id = name._id;
  	questionFactory.createQuestion($scope.newQuestion, function(data) {
      // console.log(data);
      questionFactory.index(function(questions) {
        $scope.questions = questions;
      });
		})
	};
  $scope.addUpvote = function(answer_id) {
    console.log('upvote button hit');
    if(answer_id === question_id) {
      $scope.answer.upvote + 1;
    };
  }

  questionFactory.index(function(questions) {
    $scope.questions = questions;
  });
});
