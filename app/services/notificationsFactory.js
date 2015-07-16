(function notificationsFactoryIIFE() {
  var notificationsFactory = function($http) {
    var factory = {};
    factory.notification = {};

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

  notificationsFactory.$inject = ['$http'];

  angular.module('briefApp').factory('notificationsFactory', notificationsFactory);

})();
