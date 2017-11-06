(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LeftController', LeftController);

  function LeftController ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.menuContent = [{
      title: "Follow a request",
      path: "#/follow-request"
    }, {
      title: "Services list",
      path: "#/services-list"
    }, {
      title: "About",
      path: "#/about"
    }];
  };
})();
