app.factory('questionFactory', function($http) {
  var factory = {};

  factory.index = function(cb) {
    $http.get('/questions').success(function(data){
      cb(data);
    });
  };
  return factory;
});
