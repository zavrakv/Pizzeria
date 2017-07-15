(function () {
  'use strict';
  
  angular
    .module('app.cart')
    .factory('CartService', CartService);
  
  CartService.$inject = [];

  function CartService() {
    
    var addedItems = [];
    
    
    function addToCart(item) {
      addedItems.push(item);
      return addedItems;
    }
    
    function removeFromCart(id) {
      for (var i = 0; i < addedItems.length; i++) {
        if (id === addedItems[i].id) {
          addedItems.splice(i, 1);
        }
      }
      return addedItems;
    }
    
    function countPrice() {
      var price = 0;
      for (var i = 0; i < addedItems.length; i++) {
        price += addedItems[i].price;
      }
      return price;
    }
  
    return {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      countPrice: countPrice
    };
  }
  
})();

