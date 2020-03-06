angular
  .module('propertyApp', [])
  .controller('PropertiesCtrl', PropertiesCtrl);

PropertiesCtrl.$inject = [ '$http' ]; // don't mess with minification
function PropertiesCtrl($http) {
  const vm = this;
  vm.all = [];

  propertiesIndex();

  // Angular version of AJAX
  function propertiesIndex() {
    $http.get('http://localhost:3000/properties')
    .then((res) => {
      vm.all = res.data; // render data(propertys) on to the page
      // console.log(res);
    });
  }

  vm.newProperty = {}; // page starts out EMPTY

  vm.propertiesCreate = propertiesCreate;

  function propertiesCreate() {
    $http.post('http://localhost:3000/properties', vm.newProperty)
    .then((res) => {
      vm.all.push(res.data); // push out new data and update the data.
      vm.newProperty = {}; // EMPTYs the form
    });
  }

  vm.propertiesDelete = propertiesDelete; // attaching the propertiesDelete to the the controller

  function propertiesDelete(property) {
    $http.delete(`http://localhost:3000/properties/${property.id}`) // grabs the property id
    .then(() => {
      const index = vm.all.indexOf(property);
      vm.all.splice(index, 1); // starts at index of 0 and looks for 1 property in the array of propertys
    });
  }
}
