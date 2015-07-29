// PATH FOR HEROKU
var baseURL = function() {
  // return "http://localhost:3000";
  return "https://pure-atoll-4090.herokuapp.com";
};

(function visitsFactoryIIFE() {
  var visitsFactory = function($http, $window) {
    var factory = {};
    factory.visits = [];
    factory.visit = {};

    factory.getVisits = function() {
      return $http({
          method: 'get',
          url: baseURL()+"/visits"
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
      return $http.post(baseURL()+"/visits", visitParams)
        .success(function(response) {
          console.log(response);
          $window.location.reload();
        }).error(function(error) {
          console.log(error);
        });

    };

    factory.getVisit = function(visitId) {
      return $http.get(baseURL()+'/visits/' + visitId).success(function(response) {
        angular.copy(response, factory.visit);
      });
    };

    factory.deleteVisit = function(visitId) {
      return $http.delete(baseURL()+'/visits/' + visitId).success(function(response) {
        $window.location.reload();

      });
    };

    return factory;
  };

  visitsFactory.$inject = ['$http', '$window'];

  angular.module('briefApp').factory('visitsFactory', visitsFactory);


})();
