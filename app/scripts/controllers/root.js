'use strict';

/**
 * @ngdoc function
 * @name prepositionsApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the prepositionsApp
 */
angular.module('prepositionsApp')
  .controller('RootCtrl', function ($scope,$route) {
    $scope.$route = $route;
  });
