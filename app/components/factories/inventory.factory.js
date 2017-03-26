(function () {

myApp
  .factory('inventoryFactory', inventoryFactory);

  function inventoryFactory() {
    
    var service = {
      
      inventory: [],
      getInventory: getInventory
    }

    return service;

    /////////

    function getInventory () {
        return service.inventory;
    }

    // function saveInventory () {
    //   var inventoryData = JSON.stringify(service.inventory);
    //   localStorage.setItem(inventoryData, 'inventorySave');
    // }

    // function loadInventory () {
    //   localStorage.getItem('inventorySave');
    //   inventoryLoad = JSON.parse(inventoryData);
    //   service.inventory = inventoryLoad;
    //   return service.inventory;
    // }
    
  }})();