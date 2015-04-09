(function () {
  'use strict';
  function ctrlNavbar ($scope, $location) {
    //$scope.currentPage = 'home';

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.isReading = function () {
      var currentPage = $location.path();
      var booResult = false;
      if (currentPage === '/articles' || currentPage === '/books' || currentPage === '/tutorials' ) {
        booResult = true;
      }
      return booResult;
    };

    $scope.initialization = function () {

    };
  }

  angular.module('websites').controller('CtrlNavbar', ['$scope', '$location', ctrlNavbar]);
}());