(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/index/index.html',
        controller: 'IndexController',
        controllerAs: 'index'
      })
      .when('/elements', {
        templateUrl: 'app/elements/elements.html',
        controller: 'ElementsController',
        controllerAs: 'elements'
      })
      .when('/panels', {
        templateUrl: 'app/panels/panels.html',
        controller: 'PanelsController',
        controllerAs: 'panels'
      })
      .when('/notifications', {
        templateUrl: 'app/notifications/notifications.html',
        controller: 'NotificationsController',
        controllerAs: 'notifications'
      })
      .when('/page-profile', {
        templateUrl: 'app/page-profile/page-profile.html',
        controller: 'PageProfileController',
        controllerAs: 'pageProfile'
      })
      .when('/page-login', {
        templateUrl: 'app/page-login/page-login.html',
        controller: 'PageLoginController',
        controllerAs: 'pageLogin'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
