app.factory('answerFactory', function($http) {
  var factory = {};

  factory.index = function(cb) {
    $http.get('/answers').success(function(data){
      cb(data);
    });
  };
  factory.createAnswer = function(newAnswer, cb) {
    $http.post('/answers', newAnswer).success(function(data){
      cb(data);
    });
  };
  factory.find = function(question_id, cb) {
    $http.get('/answers/'+ answer_id).success(function(data){
      cb(data);
    });
  }
  return factory;
});
