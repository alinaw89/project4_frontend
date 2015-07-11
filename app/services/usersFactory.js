(function usersFactoryIIFE() {
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {
      return $http.get('http://localhost:3000/users').success(function(response) {
        angular.copy(response, factory.users);
      })
    }
  }

})();
