angular
  .module('wonderApp')
  .controller('WondersCtrl', WondersCtrl);

WondersCtrl.$inject = ['$stateParams', '$http'];
function WondersCtrl($stateParams, $http){
  const vm = this;

  vm.all = [];

  vm.wondersShow = wondersShow;

//-----------------------------------------------------------------------------
  // if ($stateParams.id) wondersShow();

  // function wondersShow() {
  //   vm.chooseWonder = vm.all.find((wonder) => {
  //     return wonder.id === $stateParams.id;
  //   });
  // }
//------------------------------------------------------------------------------

  // Function thay allows us to view a todo task in our wonders
  function wondersShow() {
    // console.log($stateParams);
    return vm.all[$stateParams.id];
  }

  wondersIndex();

  // Angular version of AJAX
  function wondersIndex() {
    $http.get('/api/wonders') // prefixing the /api/wonders to the url
    .then((res) => {
      vm.all = res.data; // render data(wonders) on to the page
      // console.log(res);
    });
  }
}
