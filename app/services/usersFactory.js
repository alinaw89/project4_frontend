// PATH FOR HEROKU
var baseURL = function() {
  // return "http://localhost:3000";
  return "https://pure-atoll-4090.herokuapp.com";
};

(function usersFactoryIIFE() {
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {
      return $http.get(baseURL()+'/users').success(function(response) {

        angular.copy(response.users, factory.users);
      });
    };

    factory.getUser = function(userId) {
      return $http.get(baseURL()+'/users/' + userId).success(function(response) {
        angular.copy(response, factory.user);
      });
    };

    return factory;
  };

  usersFactory.$inject = ['$http'];

  angular.module('briefApp').factory('usersFactory', usersFactory);

})();
