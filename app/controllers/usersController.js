(function usersControllerIIFEE() {
  var UsersController = function(usersFactory, appSettings) {
    this.sortBy = "name";
    this.reverse = false;
    this.users = usersFactory.users;
    this.user = usersFactory.user;
    this.appSettings = appSettings;

    function init() {
      usersFactory.getUsers();
    }

    init();

    this.doSort = function(propName) {
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

  UsersController.$inject = ['usersFactory', 'appSettings'];

  angular.module('usersApp').controller('usersController', UsersController);
})(angular);
