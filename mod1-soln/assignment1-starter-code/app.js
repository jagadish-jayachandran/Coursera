(function () {
  'use strict';

  angular.module('LunchCheck', [ ])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.name=[];
$scope.totalValue=0;
$scope.txt="";
$scope.checkDisplay = function () {
  var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
    $scope.txt = totalNameValue;
};

function calculatNumericForString(array) {
    var totalStringValue = 0;
    var text= "good!";
    var text2= "too much!";
    for (var i = 0; i < array.length; i++) {
      totalStringValue +=i;
    }
    if (totalStringValue<=3) {
      return text;
    }
    if (totalStringValue > 3) {
       return text2;
    }
    
  }
};
})();
