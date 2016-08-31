myApp.controller("favoritesController", ["$scope", '$http', 'animalFactory', function($scope, $http, animalFactory) {
  console.log("favorite controller working");


    $scope.favPets = [];


    $scope.getFavorites = function() {
      animalFactory.getFavorites().then(function(response){
        console.log('these are your pets sent to the fav controller', response);
        $scope.favPets = response;
      });

    }

    angular.element(document).ready($scope.getFavorites);


//=============FAV COUNT==============

    $scope.petFavCount = function() {
      animalFactory.petFavCount().then(function(count) {
        console.log("controllerCount: ", count);
        $scope.favCount = count;
      });
    };

    angular.element(document).ready($scope.petFavCount);






$scope.deletePet = function(petID){

    $http.delete('/deletePet/' + petID).then(function(){
    console.log('delete went through');

    $scope.getFavorites();
    $scope.petFavCount();
  })};
}]);
