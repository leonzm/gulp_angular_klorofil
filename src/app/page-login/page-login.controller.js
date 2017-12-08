(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('PageLoginController', PageLoginController);

  /** @ngInject */
  function PageLoginController($log) {
    $log.info("PageLoginController init");
  }
})();
