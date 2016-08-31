var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/home", {
        templateUrl: "/views/partials/home.html",
    }).
    when("/cats", {
        templateUrl: "/views/partials/animals/cats.html",
        controller: "catController"
    }).
    when("/dogs", {
        templateUrl: "/views/partials/animals/dogs.html",
        controller: "dogController"
    }).
    when("/birds", {
        templateUrl: "/views/partials/animals/birds.html",
        controller: "birdController"
    }).
    when("/horses", {
        templateUrl: "/views/partials/animals/horses.html",
        controller: "horseController"
    }).
    when("/pigs", {
        templateUrl: "/views/partials/animals/pigs.html",
        controller: "pigController"
    }).
    when("/reptiles", {
        templateUrl: "/views/partials/animals/reptiles.html",
        controller: "reptileController"
    }).
    when("/barnyard", {
        templateUrl: "/views/partials/animals/barnyard.html",
        controller: "barnyardController"
    }).
    when("/smallfurry", {
        templateUrl: "/views/partials/animals/smallfurry.html",
        controller: "smallfurryController"
    }).
    when("/favorites", {
      templateUrl: "/views/partials/favorites.html",
      controller: "favoritesController"
    }).
    otherwise({
        redirectTo: "/home"
    });
}]);
