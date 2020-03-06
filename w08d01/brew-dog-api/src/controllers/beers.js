angular
  .module('brewdogApp')
  .controller('BeersCtrl', BeersCtrl);

BeersCtrl.$inject = ['$http'];
function BeersCtrl($http) {
  const vm = this;
  vm.all = [];

  beersIndex();

  function beersIndex() {
    $http.get('https://api.punkapi.com/v2/beers')
    .then((res) => {
      vm.all = res.data;
      console.log(res);
      console.log(res.data);
    });
  }
}
