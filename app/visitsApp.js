(function visitsAppIIFE() {
  var app = angular.module('visitsApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/visits', {
        controller: 'visitsController',
        controllerAs: 'visitsCtrl',
        templateUrl: 'app/views/visits.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
