(function () {
  angular
    .module('app.main')
    .run(appRun);
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: 'main',
        config: {
          url: '/',
          templateUrl: 'main/hz.html'
        }
      }, {
        state: 'mainpage',
        config: {
          url: '/mainpage',
          templateUrl: 'main/mainpage.html'
        }
      }
    ];
  }
})();