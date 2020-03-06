angular
  .module('wonderApp')
  .directive('wonder', wonder);

function wonder() {
  const directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/views/wonderView.html',
    scope: {
      wonderItem: '='
    }
  };
  return directive;
}
