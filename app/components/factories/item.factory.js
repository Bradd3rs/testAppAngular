(function () {

myApp
  .factory('itemFactory', itemFactory);

  function itemFactory(inventoryFactory) {

    var service = { 
      worldItems: [
        { itemName: 'Apple', consumeable: true, dropProbability: 0.1 },
        { itemName: 'Rock', consumeable: false, dropProbability: 0.2 },
        { itemName: 'Pear', consumeable: true, dropProbability: 0.3 },
        { itemName: 'Knife', consumeable: false,  dropProbability: 0.4 },
        { itemName: 'Peach', consumeable: true, dropProbability: 0.5 },
        { itemName: 'Stick', consumeable: false, dropProbability: 0.6 },
        { itemName: 'Meat', consumeable: true, dropProbability: 0.7 },
        { itemName: 'Berries', consumeable: true, dropProbability: 0.8 }
    ]};

    return service;
    
  }})();