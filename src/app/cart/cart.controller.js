(function () {
  'use strict';
  
  cartController.$inject = ['CartService', '$rootScope', '$mdToast'];
  
  function cartController(CartService, $rootScope, $mdToast) {
    var vm = this;
    
    vm.removeItem = removeItem;
    vm.submitOrder = submitOrder;
    
    function removeItem(id) {
      CartService.removeFromCart(id);
      vm.totalPrice = CartService.countPrice();
      $rootScope.$broadcast("cart:changed");
    }
    
    function submitOrder() {
      vm.pizzas = CartService.submitOrder();
      vm.totalPrice = CartService.countPrice();
      $rootScope.$broadcast("cart:changed");
      
      showCartToast('Order submitted!', 'add');
    }
  
    function showCartToast(message, type) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .hideDelay(2000)
          .position('bottom right')
          .theme(type + "-toast")
      );
    }
    
  }
  
  angular
    .module('app.cart')
    .component('cartComponent', {
      templateUrl: 'cart/cart.html',
      controller: cartController,
      controllerAs: 'vm',
      bindings: {
        pizzas: '<',
        totalPrice: '<'
      }
    })
})();