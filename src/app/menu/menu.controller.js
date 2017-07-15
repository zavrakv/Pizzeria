(function () {
  'use strict';
  
  menuController.$inject = ['$state', '$scope', '$rootScope'];
  
  function menuController($state, $scope, $rootScope) {
    var vm = this;
    
    $rootScope.$on('$viewContentLoading', function () {
      vm.currentPage = $state.current.name;
    });
  
    $scope.$on('item:added', function(event, totalPrice) {
      vm.totalPrice = totalPrice
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