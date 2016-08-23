app.controller('questionController', function($scope, sessionFactory, questionFactory, $location, $routeParams) {
    questionFactory.find($routeParams._id, function(data) {
        $scope.question = data
    })
    console.log($routeParams);
});
