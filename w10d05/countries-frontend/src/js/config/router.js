angular
  .module('countries')
  .config(Router);

Router.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function Router($urlRouterProvider, $locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/views/statics/home.html'
  })
  .state('countriesIndex', {
    url: '/countries',
    templateUrl: 'js/views/countries/index.html',
    controller: 'CountriesIndexCtrl as countriesIndex'
  })
  .state('countriesNew', {
    url: '/countries/new',
    templateUrl: 'js/views/countries/new.html',
    controller: 'CountriesNewCtrl as countriesNew'
  })
  .state('countriesShow', {
    url: '/countries/:id',
    templateUrl: 'js/views/countries/show.html',
    controller: 'CountriesShowCtrl as countriesShow'
  })
  .state('countriesEdit', {
    url: '/countries/:id/edit',
    templateUrl: 'js/views/countries/edit.html',
    controller: 'CountriesEditCtrl as countriesEdit'
  })
  .state('continentsIndex', {
    url: '/continents',
    templateUrl: 'js/views/continents/index.html',
    controller: 'ContinentsIndexCtrl as continentsIndex'
  })
  .state('continentsNew', {
    url: '/continents/new',
    templateUrl: 'js/views/continents/new.html',
    controller: 'ContinentsNewCtrl as continentsNew'
  })
  .state('continentsShow', {
    url: '/continents/:id',
    templateUrl: 'js/views/continents/show.html',
    controller: 'ContinentsShowCtrl as continentsShow'
  })
  .state('continentsEdit', {
    url: '/continents/:id/edit',
    templateUrl: 'js/views/continents/edit.html',
    controller: 'ContinentsEditCtrl as continentsEdit'
  });

  $urlRouterProvider.otherwise('/');
}
