(function usersAppIIFE() {
  var app = angular.module('usersApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'usersController',
        controllerAs: 'usersCtrl',
        templateUrl: 'app/views/users.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
