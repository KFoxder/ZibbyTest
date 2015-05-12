'use strict';

/**
 * @ngdoc directive
 * @name zibbyFilterApp.directive:filterComponent
 * @description
 * # filterComponent
 */
angular.module('zibbyFilterApp')
  .directive('zbFilterComponent', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'views/directives/filtercomponent.html',
      controller:'FilterCtrl'
    };
  });
