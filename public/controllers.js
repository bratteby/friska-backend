//This file is the most important one in the client
//Here behaviour in all different pages is defined.

var appControllers = angular.module('controllers', []);


//Controller for home-functionality
appControllers.controller('homeController', ['$scope',
  function($scope) {
    $scope.done = function(){
      console.log("Reached done() home");
      }
    }
]);

//Controller for home-functionality
appControllers.controller('patientController', ['$scope',
  function($scope) {
    $scope.done = function(){
      console.log("Reached done() patient");
      }
    }
]);


//Controller for navigating through the pages
appControllers.controller('navigationController', ['$scope',  '$location',
  function($scope,  $location) {
    $scope.location = $location.path();

    //This function should direct the user to the wanted page
    $scope.redirect = function(address) {
      $location.hash("");
      $location.path('/' + address);
      $scope.location = $location.path();
      console.log("location = " + $scope.location);
    };

  }
]);
