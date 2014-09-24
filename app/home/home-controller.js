/**
 * Home controller
 *
 */
(function() {
  'use strict';

  angular
    .module('app.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });
    }])
    .controller('HomeController', ['$scope', HomeController]);

  /**
   * Home controller of the app
   * @param {object} $scope
   */
  function HomeController($scope) {
    
  }

})();
