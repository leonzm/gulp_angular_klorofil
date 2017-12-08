(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($log) {
    $log.info("IndexController init");
  }
})();
