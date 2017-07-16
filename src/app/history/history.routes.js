(function () {
  angular
    .module('app.history')
    .run(appRun);
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: 'history',
        config: {
          url: '/history',
          component: 'historyComponent',
          resolve: {
            orders: function (CartService) {
              return CartService.getOrdersList();
            }
          }
        }
      }
    ];
  }
})();
