(function visitsControllerIIFE() {

  var VisitsController = function(visitsFactory, notificationsFactory, AuthFactory, $routeParams) {
    this.sortBy = "start_of_visit";
    this.reverse = false;
    //this.visits = visitsFactory.visits;
    this.visit = visitsFactory.visit;
    var vm = this;
    vm.visits = [];

    vm.userId = $routeParams.user_id;

    function init() {
      visitsFactory.getVisits()
        .success(function(response) {
          response.visits.forEach(function(visit) {
            vm.visits.push(visit);
          });
        });
    }

    init();

    this.doSort = function(propName) {
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

    this.newVisit = {};

    this.createVisit = function() {
      var from = AuthFactory.currentUser.name;
      var notification = this.newVisit.notification;
      visitsFactory.createVisit(this.newVisit).then(function(response) {

        notificationsFactory.createNotification(response.data.visit.id, notification, from);
      });
    };

    this.deleteVisit = function(visitId) {
      visitsFactory.deleteVisit(visitId);
    }
  };



  VisitsController.$inject = ['visitsFactory', 'notificationsFactory', 'AuthFactory', '$routeParams'];

  angular.module('briefApp').controller('visitsController', VisitsController);
})();
