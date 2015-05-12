'use strict';

/**
 * @ngdoc service
 * @name zibbyFilterApp.filterAPI
 * @description
 * # filterAPI
 * Factory in the zibbyFilterApp.
 */
angular.module('zibbyFilterApp')
  .factory('filterAPI', ['$http',function ($http) {
    var filterBaseURL = 'http://zibbytest-46478.onmodulus.net';
    var filterAPI = {};

    filterAPI.getDropdowns = function(){
      return $http({
        url: filterBaseURL+'/service/filter/dropdowns',
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      });
    };

    filterAPI.sendFilter = function(filterToSend){
      return   $http({
        url: filterBaseURL,
        method: 'POST',
        data: filterToSend,
        headers:{
          'Content-Type': 'application/json'
        }
      });
    };

    filterAPI.getTableData = function(filterOptions){
      return   $http({
        url: filterBaseURL+'/service/table',
        method: 'POST',
        data: filterOptions,
        headers:{
          'Content-Type': 'application/json'
        }
      });
    };

    // Public API here
    return filterAPI;
  }]);
