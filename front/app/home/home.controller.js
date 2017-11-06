(function() {
  'use strict';

  var home = angular.module('app.home');
  home.controller('HomeController', HomeController);

  function HomeController($scope) {
    console.log('Home Controller here');
  };

})();
