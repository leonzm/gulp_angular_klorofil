(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('TypographyController', TypographyController);

  /** @ngInject */
  function TypographyController($log) {
    $log.info("TypographyController init");
  }
})();
