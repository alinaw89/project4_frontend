(function NotificationsControllerIIFE() {
  var NotificationsController = function(notificationsFactory, $location) {
    this.notifications = notificationsFactory.notifications;
    this.notification = notificationsFactory.notification;


    var vm = this;
    vm.location = $location;

    function init() {
      console.log('test');
      notificationsFactory.getNotifications();
    }

    init();

    // this.getNotifications = function(groupID) {
    //   console.log("Showing all notifications for group " + groupID);
    //   this.location.path("/groups/" + groupID + "/notifications/");
    // };

    this.showNotification = function(visitID) {
      console.log("Showing one notification");
      this.location.path("/visits/" + visitID + "/notifications");
      notificationsFactory.getNotification(visitID);
    };

    this.createNotification = function(visitID) {
      this.location.path("/visits/" + visitID + "/notifications")
    };
  };

  NotificationsController.$inject = ['notificationsFactory', '$location'];

  angular.module('briefApp').controller('notificationsController', NotificationsController);
})();
