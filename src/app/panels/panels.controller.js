(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('PanelsController', PanelsController);

  /** @ngInject */
  function PanelsController($log) {
    $log.info("PanelsController init");
  }
})();
