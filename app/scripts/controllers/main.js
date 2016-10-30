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
    $scope.activeCtrl = 'MainCtrl';
    $scope.initPrepositions = function () {
      $http.get('./data/result.json').then(function (result) {
        $scope.prepositions = result.data;
      });
    }
    $scope.selectHandler = function (currentPreposition, selectedPreposition) {
      if (!currentPreposition || currentPreposition.description !== selectedPreposition.description) {
        currentPreposition.error = true;
        return;
      }

      $scope.prepositions = $scope.prepositions.filter(function (item) {
        return item.description !== currentPreposition.description;
      });
    }
    $scope.initPrepositions();
  });
