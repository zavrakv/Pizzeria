(function () {
  'use strict';
  
  menuController.$inject = ['$state', '$scope', '$rootScope', 'CartService'];
  
  function menuController($state, $scope, $rootScope, CartService) {
    var vm = this;
    
    $rootScope.$on('$viewContentLoading', function () {
      vm.currentPage = $state.current.name;
    });
  
    $scope.$on('item:added', function() {
      vm.totalPrice = CartService.countPrice();
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
