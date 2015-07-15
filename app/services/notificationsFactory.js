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

    return factory;
  };

  notificationsFactory.$inject = ['$http'];

  angular.module('briefApp').factory('notificationsFactory', notificationsFactory);

})();
