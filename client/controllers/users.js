app.controller('usersController', function($scope, sessionFactory, userFactory, $location) {
  $scope.user = {};
  $scope.showLogin = false;

  if (sessionFactory.session) return $location.url('/questions');
  else {
    sessionFactory.getSession(function(session) {
      if (!session) $scope.showLogin = true;
    });
  }

  $scope.login = function(){
    userFactory.login($scope.user, function(data) {
      sessionFactory.getSession(function(session){
        $location.url('/questions');
      });
    });
  };
});
