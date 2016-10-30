'use strict';

/**
 * @ngdoc function
 * @name prepositionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prepositionsApp
 */
angular.module('prepositionsApp')
  .controller('MainCtrl', function ($http, $scope) {
    $scope.prepositions = null;
    $scope.displayedItemsCount = 0;
    $http.get('./data/result.json').then(function(result) {
        $scope.prepositions = result.data;
    });
    $scope.selectHandler = function(allpreposition, currentPreposition) {
      if(allpreposition.description && currentPreposition.description && allpreposition.description === currentPreposition.description) {
          currentPreposition.active = false;
      }
    }
  });
