(function usersFactoryIIFE() {
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {
      return $http.get('http://localhost:3000/users').success(function(response) {

        angular.copy(response.users, factory.users);
      });
    };

    factory.getUser = function(userId) {
      return $http.get('http://localhost:3000/users/' + userId).success(function(response) {
        angular.copy(response, factory.user);
      });
    };

    return factory;
  };

  usersFactory.$inject = ['$http'];

  angular.module('usersApp').factory('usersFactory', usersFactory);

})();
