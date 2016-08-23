var app = angular.module('questions', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/enter.html',
      controller: 'usersController'
    })
    .when('/questions', {
      templateUrl: 'partials/questions.html',
      controller: 'questionsController'
    })
    .when('/question/:_id', {
      templateUrl: 'partials/question.html',
      controller: 'questionController'
    })
    .otherwise('/');

});
