angular.module('interview', ['ngRoute', 'cityControllers']) //'ngRoute', 'ngResource'
.factory('dataFactory', ['$http' , function($http){
    var factory = {};
    factory.getData = function (url) {
        return $http.get(url);
    };
    return factory;
}])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/city', {
        templateUrl: 'partials/city-list.html',
        controller: 'CityListCtrl'
      }).
      when('/city/:cityId', {
        templateUrl: 'partials/thumb-list.html',
        controller: 'ThumbListCtrl'
      }).
      otherwise({
        redirectTo: '/city'
      });
  }]);