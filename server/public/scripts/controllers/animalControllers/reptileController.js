myApp.controller("reptileController", ["$scope", '$http', 'animalFactory', function($scope, $http, animalFactory) {
    console.log("reptile controller working");


/* THIS IS THE UPDATED ONE */

    $scope.animalFactory = animalFactory;

    $scope.getRandomPet = function() {
      console.log('clicked');
      if($scope.animalFactory.animal() === undefined) {
        animalFactory.getRandomPet("reptile").then(function() {
          $scope.animal = animalFactory.animal();
          console.log("animal: ", animalFactory.animal());
        });
      } else {
        animalFactory.getRandomPet("reptile").then(function() {
          $scope.animal = animalFactory.animal();
      })};
    }


    $scope.favoritePet = function(animalName, animalDescription, animalPhoto, animalID) {
      console.log('clicked favorite');
      $scope.animalFactory.favoritePet(animalName, animalDescription, animalPhoto, animalID).then(function(response) {
        $scope.favPets = $scope.animalFactory.getFavorites();
      });
    }




      $scope.petFavCount = function() {
        animalFactory.petFavCount().then(function(count) {
          console.log("controllerCount: ", count);
          $scope.favCount = count;
        });
      };




    angular.element(document).ready($scope.petFavCount);

}]);
