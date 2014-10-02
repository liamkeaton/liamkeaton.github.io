/**
 * Angular app setup
 * @return {void}
 */
(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.home',
      // 'app.writing'
      'app.work'
    ])
    .config(['$locationProvider', function($locationProvider) {
      // $locationProvider.html5Mode(true);
    }]);
})();
