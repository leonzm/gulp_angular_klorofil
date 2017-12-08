(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('PageLockscreenController', PageLockscreenController);

  /** @ngInject */
  function PageLockscreenController($log) {
    $log.info("PageLockscreenController init");
  }
})();
