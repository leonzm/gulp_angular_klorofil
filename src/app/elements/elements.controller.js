(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('ElementsController', ElementsController);

  /** @ngInject */
  function ElementsController($log) {
    $log.info("ElementsController init");
  }
})();
