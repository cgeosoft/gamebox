angular.module('gbtt.controllers')

.controller('GameCtrl', function($scope, $state, $ionicHistory) {

  $scope.menu = function() {
    $ionicHistory.goBack();
    console.log($ionicHistory.backView());
  };

  $scope.start = function() {
    $state.go("card");
  };


})

.controller('CardCtrl', function($scope, $state) {

  // $scope.start = function() {
  //   $state.go("card");
  // };


})

//
// .directive('notShowWhen', ['$window', function($window) {
//   return {
//     restrict: 'A',
//     link: function($scope, $element, $attr) {
//
//       function checkExpose() {
//         var mq = $attr.notShowWhen == 'large' ? '(min-width:768px)' : $attr.showWhen;
//         if ($window.matchMedia(mq).matches) {
//           $element.removeClass('ng-hide');
//         } else {
//           $element.addClass('ng-hide');
//         }
//       }
//
//       function onResize() {
//         debouncedCheck();
//       }
//
//       var debouncedCheck = ionic.debounce(function() {
//         $scope.$apply(function() {
//           checkExpose();
//         });
//       }, 300, false);
//
//       checkExpose();
//
//       ionic.on('resize', onResize, $window);
//
//       $scope.$on('$destroy', function() {
//         ionic.off('resize', onResize, $window);
//       });
//
//     }
//   };
// }]);
