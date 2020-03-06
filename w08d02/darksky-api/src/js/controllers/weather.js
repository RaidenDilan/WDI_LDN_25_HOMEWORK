angular
  .module('darkSkies')
  .controller('WeatherIndexCtrl', WeatherIndexCtrl);

WeatherIndexCtrl.$inject = ['darksky'];
function WeatherIndexCtrl(darksky) {
  const vm = this;

  vm.weatherInfo = {};
  vm.lat = 57.454;
  vm.lng = -43.434;

  if(vm.lat && vm.lng) getWeather();

  function getWeather() {
    darksky.currentWeather(vm.lat, vm.lng)
    .then((response) => vm.weatherInfo = response);
  }
}
