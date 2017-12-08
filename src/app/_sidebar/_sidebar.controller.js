(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('_SidebarController', _SidebarController);

  /** @ngInject */
  function _SidebarController($log) {
    $log.info("_SidebarController init");
  }
})();
