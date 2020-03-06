angular
  .module('countries')
  .controller('CountriesIndexCtrl', CountriesIndexCtrl)
  .controller('CountriesShowCtrl', CountriesShowCtrl)
  .controller('CountriesNewCtrl', CountriesNewCtrl)
  .controller('CountriesEditCtrl', CountriesEditCtrl);

CountriesIndexCtrl.$inject = ['Country'];
function CountriesIndexCtrl(Country) {
  const vm = this;

  vm.all = Country.query();
}

CountriesNewCtrl.$inject = ['Country', 'Continent', '$state'];
function CountriesNewCtrl(Country, Continent, $state) {
  const vm = this;

  vm.continents = Continent.query();

  function submit() {
    Country.save(vm.country)
    .$promise
      .then(() => $state.go('countriesIndex'));
  }

  vm.submit = submit;
}

CountriesShowCtrl.$inject = ['Country', '$stateParams', '$state'];
function CountriesShowCtrl(Country, $stateParams, $state) {
  const vm = this;

  vm.country = Country.get($stateParams);

  function countriesDelete() {
    vm.country
      .$remove()
      .then(() => $state.go('countriesIndex'));
  }

  vm.delete = countriesDelete;
}

CountriesEditCtrl.$inject = ['Country', 'Continent', '$stateParams', '$state'];
function CountriesEditCtrl(Country, Continent, $stateParams, $state) {
  const vm = this;

  vm.countries = Country.query();

  vm.country = Country.get($stateParams);

  function countriesUpdate() {
    vm.country
      .$update()
      .then(() => $state.go('countriesShow', $stateParams));
  }

  vm.update = countriesUpdate;
}
