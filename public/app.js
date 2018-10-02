/*
app.js:
This file (function) acts as a router for the front-end, i.e it
dynamicaly loads different pages when user clicks them and connects
the corresponding controller to its actions 
*/

var app = angular.module("app", [
  'ngRoute',
  'controllers'
  ]);


//The angular-model "routeProvider" is what's doing all the magic
app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'homeController'
      }).
    when('/patient', {
          templateUrl: 'patient.html',
          controller: 'patientController'
        }).
    otherwise({
      redirectTo: '/home'
    });


}]);