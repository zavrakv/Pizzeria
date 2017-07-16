(function () {
	'use strict';

	mainController.$inject = ['$filter', '$rootScope', 'CartService', '$mdToast'];

	function mainController($filter, $rootScope, CartService, $mdToast) {
		var vm = this;

		vm.addToCart = addToCart;
		vm.orderBy = orderBy;
		
    
		vm.addedPizzas = [];
		vm.sortDirection = null;
		vm.totalPrice = null;
		
		
		function addToCart(pizza, $index) {
    
		  var actionType = null;
      
      if (pizza.inCart) {
        pizza.inCart = false;
        vm.addedPizzas = CartService.removeFromCart(pizza.id);
        actionType = 'remove';
      } else {
        pizza.inCart = true;
        vm.addedPizzas = CartService.addToCart(pizza);
        actionType = 'add';
      }
      
      $rootScope.$broadcast("item:added");
      showStatusText(pizza.inCart, $index);
      showToastText(pizza.inCart, pizza.name);
      showCartToast(vm.toastText, actionType)
      
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
    
    function showStatusText(status, id) {
      if (status) {
        vm.pizzas[id].status = 'Remove from cart';
      } else {
        vm.pizzas[id].status = 'Add to cart';
      }
    }
    
    function showToastText(inCart, item) {
      inCart ?
        vm.toastText = 'Item ' + item + ' added to cart!' :
        vm.toastText = 'Item  ' + item + ' removed from cart!'
    }
    
    function getSortDirection() {
      vm.sortDirection === null || vm.sortDirection === 'DESC' ?
        vm.sortDirection = 'ASC' :
        vm.sortDirection = 'DESC';
    }
    
    function orderBy(collection, mod, type) {
      getSortDirection();
      
      if (mod === 'ASC') {
        vm.pizzas = $filter('orderBy')(collection, type);
      } else if (mod === 'DESC') {
        vm.pizzas = $filter('orderBy')(collection, '-' + type);
      }
    }
    
  }
  
  angular
    .module('app.main')
    .component('mainComponent', {
      templateUrl: 'main/main-list.html',
			controller: mainController,
			controllerAs: 'vm',
      bindings: {
        pizzas: '<'
      }
    })
})();
