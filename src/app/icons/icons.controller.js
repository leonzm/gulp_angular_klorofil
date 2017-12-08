(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('IconsController', IconsController);

  /** @ngInject */
  function IconsController($log) {
    $log.info("IconsController init");
  }
})();
