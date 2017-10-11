'use strict';

/**
 * @ngdoc overview
 * @name wats4000ProjectBootstrapYourAppApp
 * @description
 * # wats4000ProjectBootstrapYourAppApp
 *
 * Main module of the application.
 */
angular
  .module('wats4000ProjectBootstrapYourAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
