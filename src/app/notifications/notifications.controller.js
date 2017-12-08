(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('NotificationsController', NotificationsController);

  /** @ngInject */
  function NotificationsController($log) {
    $log.info("NotificationsController init");
  }
})();
