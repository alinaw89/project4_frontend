function RegistrationsController(UserService, $location, $rootScope) {
  var vm = this;
  vm.user = {};
  vm.register = register;

  function register() {
    vm.dataLoading = true;
    UserService.Create(vm.user)
      .then(function(response) {
        console.log(response);
        vm.user = response.data;
        if (response.success) {
          console.log('Registrations successful');
          $location.path('/users');
        } else {
          console.error(response.message);
          vm.dataLoading = false;
        }
      });

  }
}

angular.module('briefApp').controller('RegistrationsController', RegistrationsController);


RegistrationsController.$inject = ['UserService', '$location', '$rootScope'];
