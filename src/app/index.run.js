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

      // 初始化侧边导航栏缩进
      if ($rootScope.sidebarShow == null) {
        $log.info('初始化侧边导航栏缩进');
        $rootScope.sidebarShow = true;

        $rootScope.showSidebar = function () {
          $rootScope.sidebarShow = !$rootScope.sidebarShow;
          // $log.info('化侧边导航栏是否显示：' + $rootScope.sidebarShow);

          if(!angular.element('body').hasClass('layout-fullwidth')) {
            angular.element('body').addClass('layout-fullwidth');

          } else {
            angular.element('body').removeClass('layout-fullwidth');
            angular.element('body').removeClass('layout-default'); // also remove default behaviour if set
          }

          angular.element('#btnShowSidebar').find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

          if(angular.element(window).innerWidth() < 1025) {
            if(!angular.element('body').hasClass('offcanvas-active')) {
              angular.element('body').addClass('offcanvas-active');
            } else {
              angular.element('body').removeClass('offcanvas-active');
            }
          }
        }
      }
    }
  }

})();
