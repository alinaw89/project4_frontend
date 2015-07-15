(function visitsControllerIIFE() {

  var VisitsController = function(visitsFactory, $routeParams) {
    this.sortBy = "start_of_visit";
    this.reverse = false;
    this.visits = visitsFactory.visits;
    this.visit = visitsFactory.visit;
    var vm = this;
    vm.userId = $routeParams.user_id;

    function init() {
      visitsFactory.getVisits(vm.userId);
    }

    init();

    this.doSort = function(propName) {
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

    this.newVisit = {};

    this.createVisit = function() {
      visitsFactory.createVisit(this.newVisit);
    };

  };

  VisitsController.$inject = ['visitsFactory', '$routeParams'];

  angular.module('briefApp').controller('visitsController', VisitsController);
})();
