angular
  .module('lightsaberApp')
  .controller('CharactersIndexCtrl', CharactersIndexCtrl)
  .controller('CharactersShowCtrl', CharactersShowCtrl)
  .controller('CharactersNewCtrl', CharactersNewCtrl)
  .controller('CharactersEditCtrl', CharactersEditCtrl);
  // .controller('CharactersDeleteCtrl', CharactersDeleteCtrl);

CharactersIndexCtrl.$inject = ['Character', '$state'];
function CharactersIndexCtrl(Character, $state) {
  const vm = this;

  vm.all = Character.query();

  function charactersDelete(character) {
    character
      .$remove()
      .then(() => $state.reload('charactersIndex'));
  }

  vm.delete = charactersDelete;
}

CharactersNewCtrl.$inject = ['Character', '$state'];
function CharactersNewCtrl(Character, $state) {
  const vm = this;
  vm.character = {};

  function charactersCreate() {
    Character
      .save(vm.character)
      .$promise
      .then(() => $state.go('/charactersIndex'));
  }

  vm.create = charactersCreate;
}

CharactersShowCtrl.$inject = ['Character', '$stateParams'];
function CharactersShowCtrl(Character, $stateParams) {

  const vm = this;

  vm.character = Character.get($stateParams);
}

CharactersEditCtrl.$inject = ['Character', '$stateParams', '$state'];
function CharactersEditCtrl(Character, $stateParams, $state) {
  const vm = this;

  vm.character = Character.get($stateParams);

  function charactersUpdate() {
    vm.character
      .$update()
      .then(() => $state.go('charactersShow', $stateParams));
  }

  vm.update = charactersUpdate;
}
