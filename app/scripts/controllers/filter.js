'use strict';

/**
 * @ngdoc function
 * @name zibbyFilterApp.controller:FilterCtrl
 * @description
 * # FilterCtrl
 * Controller of the zibbyFilterApp
 */
angular.module('zibbyFilterApp')
  .controller('FilterCtrl', ['$scope','cookieService','filterAPI','$rootScope',function ($scope,cookieService,filterAPI,$rootScope) {


    /**
     * @ngdoc function
     * @name zibbyFilterApp.controller:FilterCtrl.init
     * @description
     * # Initilizes all of the filter componenet model
     *
     */
    $scope.init = function(){
      /* init model*/
      $scope.model = {};
      /* Object to be returend to API with filters selected by User*/
      $scope.model.selected = {};
      /* Set dropdowns */
      filterAPI.getDropdowns()
        .then(function(response){
          if(response !== undefined && response.status === 200 && response.data !== undefined){
            $scope.model.dropdowns = response.data;
          }
          return response;
        }).then(function(){

          /* Set defaults for dropdown if available */
          setDefaults($scope.model.dropdowns);
          /* Date Picker Init */
          if(cookieService.getDefault('startDate') && cookieService.getDefault('startDate') ){
            $scope.model.date = {
              startDate: moment(new Date(cookieService.getDefault('startDate'))),
              endDate: moment(new Date(cookieService.getDefault('endDate')))
            };
          }else{
            $scope.model.date = {
              startDate: moment(),
              endDate: moment().add(1,'months')
            };
          }
          $scope.model.selected['startDate'] = $scope.model.date.startDate;
          $scope.model.selected['endDate'] = $scope.model.date.endDate;
        });
    };

    $scope.updateSelect = function(key){
      if(key !== undefined && key !== null) {
        if(key ==='startDate' || key ==='endDate'){
          $scope.model.selected['startDate'] = $scope.model.date.startDate;
          $scope.model.selected['endDate'] = $scope.model.date.endDate;
          cookieService.setDefault(key,$scope.model.date[key]);
          console.log(cookieService.getDefault('startDate'));
        }else{
          cookieService.setDefault(key, $scope.model.selected[key]);
        }

      }
    };

    $scope.submitFilter = function(){
      filterAPI.sendFilter($scope.model.selected).then(function(response){
        if(response !== undefined && response.status ===200){
          $rootScope.$broadcast('filterChangeNotification',$scope.model.selected);
        }
      });
    };

    function setDefaults(dropdown){
      var i = 0;
      for(i=0;i<dropdown.length;i++){
        var key = dropdown[i].title;
        var value = cookieService.getDefault(key);
        if(value){
          $scope.model.selected[key] = value;
        }else{
          $scope.model.selected[key] = dropdown[i].options[0].value;
        }
      }
    }
  }]);
