myApp.controller("smallfurryController", ["$scope", '$http', 'animalFactory', function($scope, $http, animalFactory) {
    console.log("smallfurry controller working");

    $scope.animalFactory = animalFactory;

    $scope.getRandomPet = function() {
      console.log('clicked');
      if($scope.animalFactory.animal() === undefined) {
        animalFactory.getRandomPet("smallfurry").then(function() {
          $scope.animal = animalFactory.animal();
          console.log("animal: ", animalFactory.animal());
        });
      } else {
        animalFactory.getRandomPet("smallfurry").then(function() {
          $scope.animal = animalFactory.animal();
      })};
    }

    $scope.favoritePet = function(animalName, animalDescription, animalPhoto, animalID) {

        var animal = {
            name: animalName,
            description: animalDescription.substring(0, 101),
            photo: animalPhoto,
            pet_id: animalID,
            pet_type: 'Small & Furry'
        };
        console.log("this is your animal your animal object:", animal);

        $http.post('/postAnimal', animal)
        .then(function(response) {
        console.log("post success response: ", response);

      });

    };

    $scope.favCount = "";

    $scope.petFavCount = function(){

    $http.get('/getFavCount').then(function(response) {
    $scope.favCount = response.data;
    console.log($scope.favCount)



  })};

  angular.element(document).ready($scope.petFavCount);

}]);
