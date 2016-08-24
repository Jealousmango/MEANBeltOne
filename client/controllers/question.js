app.controller('questionController', function($scope, sessionFactory, questionFactory, answerFactory, $location, $routeParams) {
    questionFactory.find($routeParams._id, function(data) {
        console.log('hit question.js controller');
        $scope.question = data
    })
    // console.log($routeParams);
});
