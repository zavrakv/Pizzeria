(function () {
  angular
    .module('app.cart')
    .run(appRun);
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: 'cart',
        config: {
          url: '/cart',
          component: 'cartComponent',
          resolve: {
            pizzas: function (CartService) {
              return CartService.getCartOrder();
            },
            totalPrice: function (CartService) {
              return CartService.countPrice();
            }
          }
        }
      }
    ];
  }
})();
