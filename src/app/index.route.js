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
      .when('/page-lockscreen', {
        templateUrl: 'app/page-lockscreen/page-lockscreen.html',
        controller: 'PageLockscreenController',
        controllerAs: 'pageLockscreen'
      })
      .when('/tables', {
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesController',
        controllerAs: 'tables'
      })
      .when('/typography', {
        templateUrl: 'app/typography/typography.html',
        controller: 'TypographyController',
        controllerAs: 'typography'
      })
      .when('/icons', {
        templateUrl: 'app/icons/icons.html',
        controller: 'IconsController',
        controllerAs: 'icons'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
