(function visitsFactoryIIFE() {
  var visitsFactory = function($http, $window) {
    var factory = {};
    factory.visits = [];
    factory.visit = {};

    factory.getVisits = function() {
      return $http({
          method: 'get',
          url: "http://localhost:3000/visits"
        })
        //comment out if need be
        // .success(function(response) {
        //   angular.copy(response.user.visits, factory.visits);
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
          $window.location.reload();
        }).error(function(error) {
          console.log(error);
        });

    };

    factory.getVisit = function(visitId) {
      return $http.get('http://localhost:3000/visits/' + visitId).success(function(response) {
        angular.copy(response, factory.visit);
      });
    };

    factory.deleteVisit = function(visitId) {
      return $http.delete('http://localhost:3000/visits/' + visitId).success(function(response) {
        $window.location.reload();

      });
    };

    return factory;
  };

  visitsFactory.$inject = ['$http', '$window'];

  angular.module('briefApp').factory('visitsFactory', visitsFactory);


})();
