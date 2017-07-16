(function () {
  'use strict';
  
  angular
    .module('app.cart')
    .factory('CartService', CartService);
  
  CartService.$inject = [];

  function CartService() {
    
    var items = [];
    var addedItems = [];
    var orders = [];
    var orderNumber = 0;
    
    function setItems(goods) {
      items = goods;
      for (var i = 0; i < items.length; i++) {
        items[i].status = 'Add to cart'
      }
    }
    
    function getItems() {
      return items;
    }
    
    function addToCart(item) {
      addedItems.push(item);
      return addedItems;
    }
    
    function removeFromCart(id) {
      this.changeItemStatus(false, id);
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
    
    function changeItemStatus(status, id) {
      for (var i = 0; i < items.length; i++) {
        if (id === items[i].id) {
          if (status) {
            items[i].inCart = true;
            items[i].status = 'Remove from cart';
            items[i].toastType = 'add';
          } else {
            items[i].inCart = false;
            items[i].status = 'Add to cart';
            items[i].toastType = 'remove';
          }
        }
      }
      
      return items;
    }
    
    function resetItems() {
      for (var i = 0; i < items.length; i++) {
        items[i].inCart = false;
        items[i].status = 'Add to cart';
        items[i].toastType = 'add';
      }
    }
    
    function getCartOrder() {
      return addedItems;
    }
    
    function submitOrder() {
      resetItems();
      orderNumber += 1;
      var date = new Date();
      
      orders.push({
        number: orderNumber,
        price: this.countPrice(),
        date: date.getTime()
      });
      addedItems = [];
      
      return addedItems;
    }
    
    function getOrdersList() {
      return orders;
    }
  
    return {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      countPrice: countPrice,
      getCartOrder: getCartOrder,
      submitOrder: submitOrder,
      getOrdersList: getOrdersList,
      setItems: setItems,
      getItems: getItems,
      changeItemStatus: changeItemStatus
    };
  }
  
})();

