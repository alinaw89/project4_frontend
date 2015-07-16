(function NotificationsFactoryIIFE() {
  var NotificationsFactory = function($http) {
    var factory = {};
    factory.notification = {};
    factory.notifications = [];

    factory.getNotification = function(visitId) {
      return $http({
        method: 'get',
        url: "http://localhost:3000/visits/" + visitId + '/notification',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).success(function(response) {
        angular.copy(response, factory.notification);
      });
    };

    factory.getNotifications = function() {
      return $http({
        method: 'get',
        url: "http://localhost:3000/notifications",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).success(function(response) {
        /** BEING ECONOMICAL/SMART
         *  Here, we are making an HTTP GET request per notification, even
         *    if there are multiple notifications to one visit.
         *  Let's be more clever about this. Make it so that your front-end
         *    only makes one HTTP GET request per visit id.
         *
         *  Steps:
         *    * build an array of (arrays of) notifications indexed by visit id
         *    * iterate over the array you just built, making requests by visit id
         *    * access the notifications from the above array, adding priority properties to each one
         *
         */
        angular.copy(response.notifications, factory.notifications);

        var arrPromises = factory.notifications.map(function(notification) {
          return $http({
            method: 'get',
            url: "http://localhost:3000/visits/" + notification.visit_id,
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          }).success(function(response) {
            notification.priority = response.visit.priority;
            return true;
          });
        });
      }).error(function(error) {
        console.error(error);
      });
    };

    factory.createNotification = function(visitId, notificationParams, from) {
      var notification = {
        notification: {
          message: "From: " + from + " " + "Message: " + notificationParams
        }
      };
      return $http.post("http://localhost:3000/visits/" + visitId + '/notifications', notification)
        .success(function(response) {
          console.log(response);
        }).error(function(error) {
          console.log(error);
        });
    };

    return factory;
  };

  NotificationsFactory.$inject = ['$http'];

  angular.module('briefApp').factory('notificationsFactory', NotificationsFactory);

})();
