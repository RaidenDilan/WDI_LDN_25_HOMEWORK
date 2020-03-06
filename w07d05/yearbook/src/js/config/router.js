angular
  .module('yearbookApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/students/home.html'
    })
    .state('studentsIndex', {
      url: '/students',
      templateUrl: 'js/views/students/index.html',
      controller: 'StudentsIndexCtrl as studentsIndex'
    })
    .state('studentsNew', {
      url: '/students/new',
      templateUrl: 'js/views/students/new.html',
      controller: 'StudentsNewCtrl as studentsNew'
    })
    .state('studentsShow', {
      url: '/students/:id',
      templateUrl: 'js/views/students/show.html',
      controller: 'StudentsShowCtrl as studentsShow'
    })
    .state('studentsEdit', {
      url: '/students/:id/edit',
      templateUrl: 'js/views/students/edit.html',
      controller: 'StudentsEditCtrl as studentsEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    });

  $urlRouterProvider.otherwise('/');
}
