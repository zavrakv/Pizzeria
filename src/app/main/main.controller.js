(function () {
	'use strict';

	// angular
	// 	.module('app.main')
	// 	.controller('mainController', mainController);

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
