angular
  .module('lightsaberApp')
  .factory('Character', Character);

Character.$inject = ['$resource'];
function Character($resource) {
  return new $resource('/api/characters/:id', { id: '@id' }, { update: { method: 'PUT' }
  });
}
