app.factory('questionFactory', function($http) {
  var factory = {};

  factory.index = function(cb) {
    $http.get('/questions').success(function(data){
      cb(data);
    });
  };
  factory.createQuestion = function(newQuestion, cb) {
    $http.post('/questions', newQuestion).success(function(data){
      cb(data);
    });
  };
  factory.find = function(question_id, cb) {
    $http.get('/questions/'+ question_id).success(function(data){
      cb(data);
    });
  }
  return factory;
});
