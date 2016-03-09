var app=angular.module("mp3",[
    "ngRoute",
    "appController"
]);
app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListCtrl'
        }).
        when('/list/:imdbID/:rank', {
            templateUrl: 'partials/details.html',
            controller: 'DetailCtrl'
        }).
        when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryCtrl'
        }).
        otherwise({
            redirectTo: '/list'
        });
    }]);