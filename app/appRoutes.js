(function appRoutesIIFE() {
  angular.module('appRoutes', [])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        //home page
        .when('/', {
          templateUrl: 'app/views/home.html'
        })
        //user page
        .when('/users', {
          controller: 'usersController',
          controllerAs: 'usersCtrl',
          templateUrl: 'app/views/users.html'
        })
        //user id page
        // .when('/users/:user_id', {
        //   controller: 'usersController',
        //   controllerAs: 'usersCtrl',
        //   templateUrl: 'app/views/users.html'
        // })
        //visit page
      .when('/users/:user_id', {
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
