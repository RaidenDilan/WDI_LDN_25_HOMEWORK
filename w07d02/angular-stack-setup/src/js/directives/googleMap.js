angular.module('wonderApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window']; // attaching the google map from the window to the nagular window because angular does not like.

function googleMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map">GOOGLE MAP GOES HERE</div>',
    scope: {
      center: '='
    },
    link($scope, element) {
      // event.preventDefault();
      // console.log(element);
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        scroll: false,
        center: $scope.center
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        map: map,
        animation: $window.google.maps.Animation.BOUNCE
        // animation: $window.google.maps.Animation.DROP
      });

      $window.setTimeout(() => {
        marker.setAnimation(null);
      }, 3000);
    }
  };

  return directive;
}
