'use strict';

/**
 * @ngdoc function
 * @name prepositionsApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the prepositionsApp
 */
angular.module('prepositionsApp')
  .controller('ModalinstanceCtrl', function ($uibModalInstance, $scope) {
    $scope.ok = function () {
      $uibModalInstance.close();
    };
  });
