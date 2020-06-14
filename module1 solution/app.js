
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.check = function () {
    var num = countItems($scope.dishes);
    $scope.message = message(num);
  };

  function countItems(dishes)
  {
    var count = 0;
    if (dishes)
    {
      var array = dishes.split(',');
      for (var i in array)
      {
        if (array[i].trim().length != 0)
         {
          count++;
        }
      }
    }
    return count;
  }
  function message(num)
  {
    if (num == 0)
    {
      return 'Please enter data first';
    }
    else if (num <= 3)
    {
      return 'Enjoy!';
    }
    else
    {
      return 'Too much!';
    }
  }
}

})();
