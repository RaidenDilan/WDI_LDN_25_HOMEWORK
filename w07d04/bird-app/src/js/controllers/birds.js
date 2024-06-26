angular
  .module('birdApp')
  .controller('BirdsIndexCtrl', BirdsIndexCtrl)
  .controller('BirdsNewCtrl', BirdsNewCtrl)
  .controller('BirdsShowCtrl', BirdsShowCtrl)
  .controller('BirdsEditCtrl', BirdsEditCtrl);

BirdsIndexCtrl.$inject = ['Bird', '$rootScope'];
function BirdsIndexCtrl(Bird, $rootScope) {
  const vm = this;
  vm.menuIsOpen = false;

  vm.all = Bird.query();

  function stateChange(e, toState) {
    vm.pageName = toState.name;
    vm.menuIsOpen = false;
  }

  $rootScope.$on('$stateChangeStart', stateChange);
}

BirdsNewCtrl.$inject = ['Bird', '$state'];
function BirdsNewCtrl(Bird, $state) {
  const vm = this;
  vm.bird = {};

  function birdsCreate() {
    Bird
      .save(vm.bird)
      .$promise
      .then(() => $state.go('birdsIndex'));
  }

  vm.create = birdsCreate;
}

BirdsShowCtrl.$inject = ['Bird', '$stateParams', '$state'];
function BirdsShowCtrl(Bird, $stateParams, $state) {
  const vm = this;

  vm.bird = Bird.get($stateParams);

  function birdsDelete() {
    vm.bird
      .$remove()
      .then(() => $state.go('birdsIndex'));
  }

  vm.delete = birdsDelete;
}

BirdsEditCtrl.$inject = ['Bird', '$stateParams', '$state'];
function BirdsEditCtrl(Bird, $stateParams, $state) {
  const vm = this;

  vm.bird = Bird.get($stateParams);

  function birdsUpdate() {
    vm.bird
      .$update()
      .then(() => $state.go('birdsShow', $stateParams));
  }

  vm.update = birdsUpdate;
}
