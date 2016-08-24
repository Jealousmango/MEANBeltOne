app.controller('answerController', function($scope, sessionFactory, answerFactory, $location, $routeParams) {
    answerFactory.find($routeParams._id, function(data) {
        console.log('hit it');
        $scope.answer = data
    })
    console.log($routeParams);
});
