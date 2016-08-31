myApp.controller("navController", ["$scope", '$http', '$location', function($scope, $http, $location) {
  console.log('nav controller up and running');

  $scope.currentPage = 'home';
    $scope.go = function go(page) {
      console.log(page);
      $location.path('/' + page);
      console.log($location.path);

    };

}]);
