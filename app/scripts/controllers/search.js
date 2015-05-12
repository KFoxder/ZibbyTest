'use strict';

/**
 * @ngdoc function
 * @name zibbyFilterApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the zibbyFilterApp
 */
angular.module('zibbyFilterApp')
  .controller('SearchCtrl', ['$scope','filterAPI',function ($scope,filterAPI) {

    var loadingOveraly = $('#loadingOverlay');

    $scope.init = function(){
      //filterAPI.getTableData({}).then(function(response){
      //  $scope.tableData = response.data;
      //  console.log(response);
      //  loadingOveraly.removeClass('loading');
      //});
    };
    $scope.$on('filterChangeNotification', function (event, data) {
      loadingOveraly.addClass('loading');
      filterAPI.getTableData(data).then(function(response){
        $scope.tableData = response.data;
        console.log(response);
        loadingOveraly.removeClass('loading');
      });

    });



  }]);
