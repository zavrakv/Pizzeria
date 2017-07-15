(function () {
	'use strict';

	mainController.$inject = ['$state'];

	function mainController($state) {
		var vm = this;
		
		vm.page = 'main';
	}
  
  angular
    .module('app.main')
    .component('mainComponent', {
      templateUrl: 'main/main.html',
			controller: mainController,
			controllerAs: 'vm'
    })
})();