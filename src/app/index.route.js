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
      .otherwise({
        redirectTo: '/'
      });
  }

})();
