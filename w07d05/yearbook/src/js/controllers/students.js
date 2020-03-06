angular
  .module('yearbookApp')
  .controller('StudentsIndexCtrl', StudentsIndexCtrl)
  .controller('StudentsNewCtrl', StudentsNewCtrl)
  .controller('StudentsShowCtrl', StudentsShowCtrl)
  .controller('StudentsEditCtrl', StudentsEditCtrl);

StudentsIndexCtrl.$inject = ['Student', '$rootScope'];
function StudentsIndexCtrl(Student, $rootScope) {
  const vm = this;
  vm.menuIsOpen = false;

  vm.all = Student.query();

  function stateChange(e, toState) {
    vm.pageName = toState.name;
    vm.menuIsOpen = false;
  }

  $rootScope.$on('$stateChangeStart', stateChange);
}

StudentsNewCtrl.$inject = ['Student', '$state'];
function StudentsNewCtrl(Student, $state) {
  const vm = this;
  vm.student = {};

  function studentsCreate() {
    Student
      .save(vm.student)
      .$promise
      .then(() => $state.go('studentsIndex'));
  }

  vm.create = studentsCreate;
}

StudentsShowCtrl.$inject = ['Student', '$stateParams', '$state'];
function StudentsShowCtrl(Student, $stateParams, $state) {
  const vm = this;

  vm.student = Student.get($stateParams);

  function studentsDelete() {
    vm.student
      .$remove()
      .then(() => $state.go('studentsIndex'));
  }

  vm.delete = studentsDelete;
}

StudentsEditCtrl.$inject = ['Student', '$stateParams', '$state'];
function StudentsEditCtrl(Student, $stateParams, $state) {
  const vm = this;

  vm.student = Student.get($stateParams);

  function studentsUpdate() {
    vm.student
      .$update()
      .then(() => $state.go('studentsShow', $stateParams));
  }

  vm.update = studentsUpdate;
}
