(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
       .when('/', {
        templateUrl: '/app/home/home.template.html',
        controller: 'HomeController'
      })
      .when('/create-request/', {
        templateUrl: '/app/request/create-request.template.html'
      })
      .when('/follow-request/', {
        templateUrl: '/app/request/follow-request.template.html'
      })
      .when('/services-list/', {
        templateUrl: '/app/providers/providers-list.template.html'
      })
      .when('/about/', {
        templateUrl: 'partials/about.template.html'
      })
    });
})();
