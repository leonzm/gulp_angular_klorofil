(function() {
  'use strict';

  angular
    .module('gulpAngularKlorofil')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    // 初始化侧边导航栏菜单 active
    if ($rootScope.sidebarMenuActive == null) {
      $log.info('初始化侧边导航栏菜单 active');

      $rootScope.sidebarMenuActive = {index: 'active', elements: '', panels: '', subPages: 'collapsed', notifications: '',
        tables: '', typography: '', icons: ''};
      $rootScope.menuClick = function (menuName) {
        $rootScope.sidebarMenuActive = {index: '', elements: '', panels: '', subPages: 'collapsed', notifications: '',
          tables: '', typography: '', icons: ''};

        if ('index' == menuName) {
          $rootScope.sidebarMenuActive.index = 'active';
        } else if ('elements' == menuName) {
          $rootScope.sidebarMenuActive.elements = 'active';
        } else if ('panels' == menuName) {
          $rootScope.sidebarMenuActive.panels = 'active';
        } else if ('subPages' == menuName) {
          $rootScope.sidebarMenuActive.subPages = 'active';
        } else if ('notifications' == menuName) {
          $rootScope.sidebarMenuActive.notifications = 'active';
        } else if ('tables' == menuName) {
          $rootScope.sidebarMenuActive.tables = 'active';
        } else if ('typography' == menuName) {
          $rootScope.sidebarMenuActive.typography = 'active';
        } else if ('icons' == menuName) {
          $rootScope.sidebarMenuActive.icons = 'active';
        }
      };

    }
  }

})();
