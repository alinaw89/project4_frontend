var app = angular.module('briefApp', ['ngRoute', 'appRoutes']);

app.run(function($window, $http) {
  var token = $window.localStorage.getItem('gl-user-token');
  if (token) {
    $http.defaults.headers.common.Authorization = 'Token token=' + token;
  }
});
