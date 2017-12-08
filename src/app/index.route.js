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
      .otherwise({
        redirectTo: '/'
      });
  }

})();
