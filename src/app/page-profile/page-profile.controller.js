(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('PageProfileController', PageProfileController);

  /** @ngInject */
  function PageProfileController($log) {
    $log.info("PageProfileController init");
  }
})();
