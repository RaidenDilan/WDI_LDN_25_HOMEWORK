angular
  .module('brewdogApp')
  .controller('BeersIndexCtrl', BeersIndexCtrl);

BeersIndexCtrl.$inject = ['$http', 'filterFilter', 'orderByFilter', '$scope'];
function BeersIndexCtrl($http, filterFilter, orderByFilter, $scope) {
  const vm = this;
  vm.all = [];
  // vm.all = Beer.query();
  let beerAmount = 12;
  vm.isNavCollapsed = true;

  beersIndex();

  function beersIndex() {
    $http.get('https://api.punkapi.com/v2/beers', { params: { per_page: `${beerAmount}` }})
    .then((res) => {
      vm.all = res.data;
      console.log(res);
      // console.log(res.data);
      filterBeer(); // shows the beers in the index when the page first loads
    });
  }

  function moreBeers() {
    beerAmount += 12;
    beersIndex();
  }

  vm.moreBeers = moreBeers;

  function filterBeer() {
    const params = { name: vm.q };
    vm.filtered = filterFilter(vm.all, params);
    vm.filtered = orderByFilter(vm.filtered, vm.sort);
    // vm.filtered = filterFilter(vm.all, vm.q);
  }

// Watch Group is watching out for all those array of functions.
  $scope.$watchGroup([
    () => vm.q,
    () => vm.abv,
    () => vm.sort
  ], filterBeer);
}
