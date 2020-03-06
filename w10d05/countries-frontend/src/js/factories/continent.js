angular
  .module('countries')
  .factory('Continent', Continent);

Continent.$inject = ['$resource', 'API_URL'];
function Continent($resource, API_URL) {
  return new $resource(`${API_URL}/continents/:id`, { id: '@id' }, { update: { method: 'PUT' } });
}
