(function authControllerIFFE() {
  function AuthController($location, AuthFactory) {
    var vm = this;
    vm.credentials = {};

    vm.login = function() {
      AuthFactory.login(vm.credentials).then(function(response) {
        vm.credentials = {};
        $location.path('');
      });
    };

    vm.logout = function() {
      AuthFactory.logout();
    };

    vm.isLoggedIn = function() {
      return AuthFactory.isLoggedIn();
    };

  };

  AuthController.$inject = ['$location', 'AuthFactory'];

  angular.module('briefApp').controller('authController', AuthController);

})();
