var cityControllers = angular.module('cityControllers', []);


cityControllers.controller('CityListCtrl',[ '$scope', '$http', 'dataFactory', function($scope, $http, dataFactory) {

    dataFactory.getData('http://mqlocal.aol.com/photos').then(function(cityData){
        $scope.cities = cityData.data;
    });

}]);


cityControllers.controller('ThumbListCtrl',[ '$scope', '$http', '$routeParams', 'dataFactory', function($scope, $http, $routeParams, dataFactory) {

    $scope.cityId = $routeParams.cityId;
    $scope.url = 'http://mqlocal.aol.com/photos/' +  $scope.cityId;

    dataFactory.getData($scope.url).then(function(imagesData){
        $scope.photos = imagesData.data.photos;
        });

}]);
