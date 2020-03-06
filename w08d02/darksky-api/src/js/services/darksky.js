angular
  .module('darkSkies')
  .service('darksky', Darksky);

Darksky.$inject = ['$http'];
function Darksky($http) {
  this.currentWeather = function currentWeather(lat, lng) {
    return $http
    .get('/api/weather', { params: { lat, lng } })
    .then((response) => {
      console.log(response.data);
      // console.log(response.data.currently);
      // console.log(response.daily.data);
      return response.data;
    });
  };
}
