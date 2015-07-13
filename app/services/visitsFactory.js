(function visitsFactoryIIFE() {
  var visitsFactory = function($http) {
    var factory = {};
    factory.visits = [];
    factory.visit = {};

    factory.getVisits = function() {
      return $http.get('http://localhost:3000/visits').success(function(response) {

        angular.copy(response.visits, factory.visits);
      });
    };

    factory.getVisit = function(visitId) {
      return $http.get('http://localhost:3000/visits/' + visitId).success(function(response) {
        angular.copy(response, factory.visit);
      });
    };

    return factory;
  };

  visitsFactory.$inject = ['$http'];

  angular.module('briefApp').factory('visitsFactory', visitsFactory);

})();
