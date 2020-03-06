/* global describe, expect, it, beforeEach, inject */

// UNIT TESTING. NOT N2N

describe('birdsIndexCtrl', () => {
  beforeEach(module('brewdogApp')); // ng-app="coffeeAssembly"

  let $rootScope, $controller;

  beforeEach(inject((_$rootScope_, _$controller_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('filterBeer', () => {
    let $scope, vm;

    beforeEach(() => {
      $scope = $rootScope.$new();
      vm = $controller('BeersIndexCtrl', { $scope });

      vm.all = [{
        name: 'corona',
        abv: 1
      },{
        name: 'peroni',
        abv: 2
      }];
    });

    it('filters beers by name', () => {
      vm.q = 'peroni';
      $scope.$digest();

      expect(vm.filtered.length).to.equal(1);
      expect(vm.filtered[0].name).to.equal('peroni');
    });

    it('filers beers by abv', () => {
      vm.abv = true;
      vm.abv = 2;
      $scope.$digest();

      expect(vm.filtered.length).to.equal(1);
      expect(vm.filtered[0].abv).to.equal(2);
    });
  });
});
