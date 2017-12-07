(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
