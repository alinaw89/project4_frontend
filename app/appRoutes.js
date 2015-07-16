(function appRoutesIIFE() {
  angular.module('appRoutes', [])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        //home page
        .when('/', {
          templateUrl: 'app/views/home.html'
        })
        //login
        .when('/login', {
          controller: 'authController',
          controllerAs: 'authCtrl',
          templateUrl: 'app/views/login.html'
        })
        //signup
        .when('/signup', {
          controller: 'authController',
          controllerAs: 'authCtrl',
          templateUrl: 'app/views/signup.html'
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
        //all notifications
        .when('/notifications', {
          controller: 'notificationsController',
          controllerAs: 'notificationsCtrl',
          templateUrl: 'app/views/notification.html'
        })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
})();
