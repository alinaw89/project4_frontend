// PATH FOR HEROKU
var baseURL = function() {
  // return "http://localhost:3000";
  return "https://pure-atoll-4090.herokuapp.com";
};

(function NotificationsFactoryIIFE() {
  var NotificationsFactory = function($http) {
    var factory = {};
    factory.notification = {};
    factory.notifications = [];

    factory.getNotification = function(visitId) {
      return $http({
        method: 'get',
        url: baseURL() + "/visits/" + visitId + '/notification',
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
        url: baseURL() + "/notifications",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).success(function(response) {
        angular.copy(response.notifications, factory.notifications);

        var arrPromises = factory.notifications.map(function(notification) {
          return $http({
            method: 'get',
            url: baseURL() + "/visits/" + notification.visit_id,
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
      return $http.post(baseURL() + "/visits/" + visitId + '/notifications', notification)
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
