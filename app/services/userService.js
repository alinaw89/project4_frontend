// PATH FOR HEROKU
var baseURL = function() {
  // return "http://localhost:3000";
  return "https://pure-atoll-4090.herokuapp.com";
};

(function() {
  'use strict';

  function UserService($http) {
    var service = {};

    service.GetAll = GetAll;
    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;

    return service;

    function GetAll() {
      return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
    }

    function GetById(id) {
      return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function GetByUsername(username) {
      return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
    }

    function Create(user) {

      return $http.post(baseURL() + '/register', user).then(handleSuccess, handleError('Error creating user'));

    }

    function Update(user) {
      return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    function Delete(id) {
      return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
    }

    // private functions

    function handleSuccess(data) {
      window.location.replace('http://localhost:5000/#/users');
      return data;
    }

    function handleError(error) {
      return function() {
        return {
          success: false,
          message: error
        };
      };
    }
  }

  UserService.$inject = ['$http'];

  angular.module('briefApp').factory('UserService', UserService);
})();
