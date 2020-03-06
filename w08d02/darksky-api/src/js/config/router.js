angular
  .module('darkSkies')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('weatherIndex', {
      url: '/home',
      templateUrl: 'js/views/index.html',
      controller: 'WeatherIndexCtrl as weatherIndex'
    });

  $urlRouterProvider.otherwise('/home');
}
