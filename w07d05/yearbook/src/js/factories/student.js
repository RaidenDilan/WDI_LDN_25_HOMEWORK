angular
  .module('yearbookApp')
  .factory('Student', Student);

Student.$inject = ['$resource'];
function Student($resource) {
  return new $resource('/api/students/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
