'use strict';

/**
 * @ngdoc service
 * @name zibbyFilterApp.cookieFactory
 * @description
 * # cookieFactory
 * Factory in the zibbyFilterApp.
 */
angular.module('zibbyFilterApp')
  .factory('cookieService', ['$cookies', function ($cookies) {

    var cookieAPI = {};

    cookieAPI.getDefault = function(key){
      var cookieValue = null;
      if(key !== undefined && key !== null) {
        cookieValue = $cookies[key];
      }
      return cookieValue;
    };

    cookieAPI.setDefault = function(key,value){
      if(value !== undefined && value !== null && key !== undefined && key !== null) {
        $cookies[key] = value;
      }
    };

    // Public API here
    return cookieAPI;
  }]);
