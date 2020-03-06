angular
  .module('countries')
  .controller('ContinentsIndexCtrl', ContinentsIndexCtrl)
  .controller('ContinentsNewCtrl', ContinentsNewCtrl)
  .controller('ContinentsShowCtrl', ContinentsShowCtrl)
  .controller('ContinentsEditCtrl', ContinentsEditCtrl);

ContinentsIndexCtrl.$inject = ['Continent'];
function ContinentsIndexCtrl(Continent) {
  const vm = this;

  vm.all = Continent.query();
}

ContinentsNewCtrl.$inject = ['Continent', '$state'];
function ContinentsNewCtrl(Continent, $state) {
  const vm = this;

  vm.continents = Continent.query();

  function submit() {
    Continent.save(vm.continent)
    .$promise
      .then(() => $state.go('continentsIndex'));
  }

  vm.submit = submit;
}

ContinentsShowCtrl.$inject = ['Continent', '$stateParams', '$state'];
function ContinentsShowCtrl(Continent, $stateParams, $state) {
  const vm = this;

  vm.continent = Continent.get($stateParams);

  function continentsDelete() {
    vm.continent
      .$remove()
      .then(() => $state.go('continentsIndex'));
  }

  vm.delete = continentsDelete;
}

ContinentsEditCtrl.$inject = ['Continent', '$stateParams', '$state'];
function ContinentsEditCtrl(Continent, $stateParams, $state) {
  const vm = this;

  vm.countries = Continent.query();

  vm.continent = Continent.get($stateParams);

  function continentsUpdate() {
    vm.country
      .$update()
      .then(() => $state.go('continentsShow', $stateParams));
  }

  vm.update = continentsUpdate;
}
