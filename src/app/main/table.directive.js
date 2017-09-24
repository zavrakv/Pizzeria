(function () {
  'use strict';
  
  angular
    .module('app.main')
    .directive('tableDirective', tableDirective);
  
  tableDirective.$inject = [];
  
  /* @ngInject */
  function tableDirective() {
    return {
      bindToController: true,
      controller: tableController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      templateUrl: 'main/table.html',
      scope: {
        rowsNum: '=',
        tableId: '='
      }
    };
    
    function link(scope, element, attrs) {
      
      var scrolled,
          elHeight,
          topBorder,
          bottomBorder;
      
      element.ready(function () {
        scrolled = window.scrollY;
        elHeight = element[0].offsetHeight;
        topBorder = element[0].offsetTop;
        bottomBorder = topBorder + elHeight;
  
        
      });
  
      angular.element(window).bind('scroll', function () {
        scrolled = window.scrollY;
        elHeight = element[0].offsetHeight;
        topBorder = element[0].offsetTop;
        bottomBorder = topBorder + elHeight;
    
        scope.checkScrollPosition();
      });
      
      scope.checkScrollPosition = function() {
        
        if (scrolled > topBorder && scrolled < bottomBorder) {
          console.log('sticked')
        } else {
          console.log('unsticked')
        }
        console.log('scrolled: ' + scrolled)
        console.log('topBorder: ' + topBorder)
        console.log('bottomBorder: ' + bottomBorder)
        console.log('-----------------------------')
      };
      
      function stickHeaders() {
      
      }
      
      function unstickHeaders() {
      
      }
      
    }
  }
  
  tableController.$inject = [];
  
  /* @ngInject */
  function tableController() {
    var vm = this;
  
    vm.rows = new Array(vm.rowsNum);
    vm.id = vm.tableId
  }
  
})();

