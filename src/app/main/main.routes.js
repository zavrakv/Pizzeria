(function () {
  angular
    .module('app.main')
    .run(appRun);
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), '/');
  }
  
  function getStates() {
    return [
      {
        state: 'main',
        config: {
          url: '/',
          component: 'mainComponent',
          resolve: {
            pizzas: function (CartService, MainFactory) {
              if (!CartService.getItems().length) {
                var pizzas = [];
                return MainFactory.getPizzas().then(function (res) {
                  console.log(res);
                  pizzas = res;
                }).then(function () {
                  CartService.setItems(pizzas);
                  return CartService.getItems();
                });
              } else {
                return CartService.getItems();
              }
            },
            addedPizzas: function (CartService) {
              return CartService.getCartOrder();
            }
          }
        }
      }
    ];
  }
})();