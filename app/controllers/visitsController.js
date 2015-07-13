(function visitsControllerIIFE() {

  var VisitsController = function(visitsFactory, appSettings) {
    this.sortBy = "protocol";
    this.reverse = false;
    this.visits = visitsFactory.visits;
    this.visit = visitsFactory.visit;
    this.appSettings = appSettings;

    function init() {
      visitsFactory.getVisits();
    }

    init();

    this.doSort = function(propName) {
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

  VisitsController.$inject = ['visitsFactory', 'appSettings'];

  angular.module('briefApp').controller('visitsController', VisitsController);
})();
