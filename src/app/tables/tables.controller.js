(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('TablesController', TablesController);

  /** @ngInject */
  function TablesController($log) {
    $log.info("TablesController init");
  }
})();
