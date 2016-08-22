app.controller('questionsController', function($scope, sessionFactory, questionFactory, $location) {
  $scope.questions = [];
  // $scope.newQuestion = {
  //   title: '',
  //   description: '',
  //   question_id: '',
  //   user_id: ''
  // };

  //check if session variable is set
  if (!sessionFactory.session) {
    //if not set, see if back end has it set
    sessionFactory.getSession(function(session){
      //if back end does not have it set either, probably means they need to log in
      if (!session) $location.url('/');
    })
  };

  $scope.createQuestion = function(newQuestion, title) {
		newQuestion.title = title.title;
    newQuestion.description = description.description;
    newQuestion.question_id = question_id;
		newQuestion.user_id = name._id;
  	questionFactory.createQuestion(newQuestion, function(data) {

		})
	}

  questionFactory.index(function(questions) {
    $scope.questions = questions;
  });
});
