(function usersControllerIIFE() {

  var UsersController = function(usersFactory, $location) {
    this.sortBy = "name";
    this.reverse = false;
    this.users = usersFactory.users;
    this.user = usersFactory.user;
    var vm = this;
    vm.location = $location;


    function init() {
      usersFactory.getUsers();
    }

    init();

    this.doSort = function(propName) {
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

    this.showUser = function(userID) {
      console.log("ID is " + userID);
      this.location.path("/users/" + userID);
      // usersFactory.getUser(userID);
    }

  };


  UsersController.$inject = ['usersFactory', '$location'];

  angular.module('briefApp').controller('usersController', UsersController);
})();
