(function visitsFactoryIIFE() {
  var visitsFactory = function($http) {
    var factory = {};
    factory.visits = [];
    factory.visit = {};

    factory.getVisits = function(userId) {
      return $http({
          method: 'get',
          url: "http://localhost:3000/users/" + userId
        })
        //.success(function(response) {
        //  angular.copy(response.user.visits, factory.visits);
        // });
    };

    factory.createVisit = function(visitParams) {
      console.log(visitParams);
      var visit = {
        visit: visitParams
      };
      return $http.post("http://localhost:3000/visits", visitParams)
        .success(function(response) {
          console.log(response);
        }).error(function(error) {
          console.log(error);
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
