'use strict';

/**
 * @ngdoc function
 * @name prepositionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prepositionsApp
 */
angular.module('prepositionsApp')
  .controller('MainCtrl', function ($http, $scope, $uibModal, $document) {
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
        MessageDialog(true);
        return;
      }

      MessageDialog(false).finally(function () {
        $scope.prepositions = $scope.prepositions.filter(function (item) {
          return item.description !== currentPreposition.description;
        });
      });
    }

    $scope.initPrepositions();
    
    function MessageDialog(isError) {
      return $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/message.html',
        controller: 'ModalinstanceCtrl',
        size: 'sm',
        appendTo: undefined,
        resolve: {
          'isError': function() {
            return isError;
          }
        }
      }).result;
    };
  });
