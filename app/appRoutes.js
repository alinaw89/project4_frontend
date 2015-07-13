(function appRoutesIIFE() {
  angular.module('appRoutes', [])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        //home page
        .when('/', {
          templateUrl: 'app/views/home.html'
        })
          .when('/users', {
            controller: 'usersController',
            controllerAs: 'usersCtrl',
            templateUrl: 'app/views/users.html'
          })
          .when('/visits', {
            controller: 'visitsController',
            controllerAs: 'visitsCtrl',
            templateUrl: 'app/views/visits.html'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
})();
