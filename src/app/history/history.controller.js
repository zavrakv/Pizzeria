(function () {
  'use strict';
  
  historyController.$inject = ['CartService', '$rootScope', '$mdToast'];
  
  function historyController(CartService, $rootScope, $mdToast) {
    var vm = this;
  
    
  }
  
  angular
    .module('app.history')
    .component('historyComponent', {
      templateUrl: 'history/history.html',
      controller: historyController,
      controllerAs: 'vm',
      bindings: {
        orders: '<'
      }
    })
})();