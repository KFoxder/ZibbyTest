'use strict';

/**
 * @ngdoc overview
 * @name zibbyFilterApp
 * @description
 * # zibbyFilterApp
 *
 * Main module of the application.
 */
angular
  .module('zibbyFilterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.grid',
    'daterangepicker'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homeview.html',
        controller: 'HomeCtrl'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      });
  });
