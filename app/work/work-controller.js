/**
 * Work controller
 *
 */
(function() {
  'use strict';

  angular
    .module('app.work', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'WorkController'
      });
    }])
    .controller('WorkController', ['$scope', WorkController]);

  /**
   * Work controller of the app
   * @param {object} $scope
   */
  function WorkController($scope) {
    console.log('here');
  }

})();
