/* Sample Controller */
var appController = angular.module('appController', []);

appController.controller('ListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        $scope.sort = 'rank';
    }]);

appController.controller('DetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        $scope.imdbID = $routeParams.imdbID;
        $scope.rank = $routeParams.rank;
        $scope.prev = $scope.rank - 1;
        $scope.next = $scope.rank - (-1); // Subtract twice because if I use + it just truncates it and changes it to a string.
    }]);

appController.controller('GalleryCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        $scope.genreFilter = '';
    }]);


