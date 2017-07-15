(function () {
  'use strict';
  
  menuController.$inject = ['$state', '$rootScope'];
  
  function menuController($state, $rootScope) {
    var vm = this;
    
    $rootScope.$on('$viewContentLoading', function (event, toState, toParams, fromState, fromParams) {
      vm.currentPage = $state.current.name;
    });
    
    vm.menuItems = [{
      menuName: 'Main',
      href: '/main',
      uiSref: 'main'
    }, {
      menuName: 'Cart',
      href: '/cart',
      uiSref: 'cart'
    }, {
      menuName: 'History',
      href: '/history',
      uiSref: 'history'
    }]
    
  }
  
  angular
    .module('app.menu')
    .component('menuComponent', {
      templateUrl: 'menu/menu.html',
      controller: menuController,
      controllerAs: 'vm'
    })
})();