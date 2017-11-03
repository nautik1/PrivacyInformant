angular.module('PrivacyInformant', ['ngMaterial'])
.config(function($mdThemingProvider) {

  $mdThemingProvider.definePalette('pipalette', {
    '50': 'e6f8ed',
    '100': 'aae8c2',
    '200': '7edba3',
    '300': '46cc7b',
    '400': '35bf6b',
    '500': '2ea75e',
    '600': '278f50',
    '700': '217743',
    '800': '1a5f35',
    '900': '144728',
    'A100': 'd8fce6',
    'A200': '78f5aa',
    'A400': '2cdc72',
    'A700': '2ec168',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      '300',
      '400',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    'contrastLightColors': [
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('pipalette')
    .accentPalette('blue');
})
.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
   $scope.toggleLeft = buildDelayedToggler('left');

   /**
    * Supplies a function that will continue to operate until the
    * time is up.
    */
   function debounce(func, wait, context) {
     var timer;

     return function debounced() {
       var context = $scope,
           args = Array.prototype.slice.call(arguments);
       $timeout.cancel(timer);
       timer = $timeout(function() {
         timer = undefined;
         func.apply(context, args);
       }, wait || 10);
     };
   }

   /**
    * Build handler to open/close a SideNav; when animation finishes
    * report completion in console
    */
   function buildDelayedToggler(navID) {
     return debounce(function() {
       // Component lookup should always be available since we are not using `ng-if`
       $mdSidenav(navID)
         .toggle()
         .then(function () {
           $log.debug("toggle " + navID + " is done");
         });
     }, 200);
   }
 })
 .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
   $scope.close = function () {
     // Component lookup should always be available since we are not using `ng-if`
     $mdSidenav('left').close()
       .then(function () {
         $log.debug("close LEFT is done");
       });
   };

   $scope.menuContent = [{
     title: "Follow a request",
     path: "/follow"
   }, {
     title: "Services list",
     path: "/services"
   }, {
     title: "About",
     path: "/about"
   }];


 });
