(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .controller('NotificationsController', NotificationsController);

  /** @ngInject */
  function NotificationsController($log, toastr) {
    $log.info("NotificationsController init");

    // toastr 通知测试，按钮事件通知就不一一写了
    toastr.success('Hello world!', 'Toastr fun!');
  }
})();
