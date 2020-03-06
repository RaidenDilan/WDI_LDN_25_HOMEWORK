angular
  .module('instagram')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;

  function register() {
    $auth.signup(vm.user)
      // .then(user => console.log(user));
      .then(() => $state.go('login'));
  }
  vm.register = register;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(user => console.log(user));
  }
  vm.authenticate = authenticate;

  function login() {
    $auth.login(vm.credentials)
      // .then(user => console.log(user));
      .then(() => $state.go('register'));
  }
  vm.login = login;
}
