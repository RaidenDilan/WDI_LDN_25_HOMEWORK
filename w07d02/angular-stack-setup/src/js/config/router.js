angular
  .module('wonderApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  // routes go here...
  $stateProvider
  // state - state of the page, show age or edit or index page
  .state('home', {
    url: '/',
    templateUrl: '/js/views/homeView.html'
  })
  .state('wonders', {
    url: '/wonders',
    templateUrl: '/js/views/wondersView.html'
  })
  .state('wondersShow', {
    url: '/wonders/:id',
    templateUrl: 'js/views/showView.html'
  });

  $urlRouterProvider.otherwise('/');
}
