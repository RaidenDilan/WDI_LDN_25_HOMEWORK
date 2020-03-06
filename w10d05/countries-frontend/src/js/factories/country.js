angular
  .module('countries')
  .factory('Country', Country);

Country.$inject = ['$resource', 'API_URL'];
function Country($resource, API_URL) {
  return new $resource(`${API_URL}/countries/:id`, { id: '@id' }, { update: { method: 'PUT' } });
}
