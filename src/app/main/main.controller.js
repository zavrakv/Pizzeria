(function () {
	'use strict';

	mainController.$inject = ['$filter', '$rootScope'];

	function mainController($filter, $rootScope) {
		var vm = this;

		vm.addToCart = addToCart;
		vm.orderBy = orderBy;
		
    
		vm.addedPizzas = [];
		vm.sort = null;
		vm.totalPrice = null;
		
    /* TODO: refactor this function */
		function addToCart(pizza, $index) {
      
      pizza.inCart ?
        pizza.inCart = false :
        pizza.inCart = true;
      
      if (pizza.inCart) {
        vm.addedPizzas.push(pizza);
      } else {
        for (var i = 0; i < vm.addedPizzas.length; i++) {
          if (pizza.id === vm.addedPizzas[i].id) {
            vm.addedPizzas.splice(i, 1);
          }
        }
      }
      
      showStatusText(pizza.inCart, $index);
      vm.totalPrice = countPrice(vm.addedPizzas);
      
      $rootScope.$broadcast("item:added", vm.totalPrice);
    }
    
    function showStatusText(status, id) {
      if (status) {
        vm.pizzas[id].status = 'Remove from cart'
      } else {
        vm.pizzas[id].status = 'Add to cart'
      }
    }
    
    function orderBy(type) {
      vm.sort === null || vm.sort === 'DESC' ?
        vm.sort = 'ASC' :
        vm.sort = 'DESC';
      
      sort(vm.pizzas, vm.sort, type)
    }
    
    function sort(collection, mod, type) {
      if (mod === 'ASC') {
        vm.pizzas = $filter('orderBy')(collection, type);
      } else if (mod === 'DESC') {
        vm.pizzas = $filter('orderBy')(collection, '-' + type);
      }
    }
    
    function countPrice(pizzas) {
		  var price = 0;
      for (var i = 0; i < pizzas.length; i ++) {
        price += pizzas[i].price;
      }
      return price;
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