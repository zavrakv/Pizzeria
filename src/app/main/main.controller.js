(function () {
	'use strict';

	mainController.$inject = ['$filter', '$rootScope', 'CartService'];

	function mainController($filter, $rootScope, CartService) {
		var vm = this;

		vm.addToCart = addToCart;
		vm.orderBy = orderBy;
		
    
		vm.addedPizzas = [];
		vm.sortDirection = null;
		vm.totalPrice = null;
		
		
		function addToCart(pizza, $index) {
      
      pizza.inCart ?
        pizza.inCart = false :
        pizza.inCart = true;
      
      if (pizza.inCart) {
        vm.addedPizzas = CartService.addToCart(pizza);
      } else {
        vm.addedPizzas = CartService.removeFromCart(pizza.id)
      }
      
      showStatusText(pizza.inCart, $index);
      $rootScope.$broadcast("item:added");
    }
    
    function showStatusText(status, id) {
      if (status) {
        vm.pizzas[id].status = 'Remove from cart'
      } else {
        vm.pizzas[id].status = 'Add to cart'
      }
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
