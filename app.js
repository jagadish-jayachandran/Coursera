(function() {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController',function ($scope) {
   $scope.name = "";
   $scope.totalValue=0;
   $scope.displayNumeric = function () {
     var totalNameValue = calcNumeric($scope.name);
     $scope.totalValue=totalNameValue;
   };
   function calcNumeric(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
   }
  });
})();
