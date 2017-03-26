(function () {

myApp
  .factory('rollFactory', rollFactory);

  function rollFactory(
    
    inventoryFactory,
    itemFactory) {
    
    var service = {
      
      rollChance: rollChance,
      getLoot: getLoot

    };
    
    return service;

    /////////

    function rollChance() {
        chance  = Math.floor((Math.random() * 100) + 1);
        return chance;
    }

    function getLoot() {

      var itemChance = Math.random();
          console.log(itemChance);

      for (var i = itemFactory.worldItems.length -1; i >= 0; i--) {
          worldItems = itemFactory.worldItems[i];
          itemFactory.worldItems[i]['dropProbability'];
          //TODO: This pushes directly to inventory, maybe this should go into a temp. array then only some items are pushed to inventory?
          if ( itemChance > worldItems.dropProbability && itemChance < worldItems.dropProbability + 0.1 ) {
            //itemFactory.worldItems.splice(i,1);
            inventoryFactory.inventory.push({ 
              "itemName"    : worldItems.itemName,
              "consumeable"   : worldItems.consumeable,
              "dropProbability" : worldItems.dropProbability
          });
        } 
      }
      
      inventoryFactory.inventory.sort(function(a, b) {
          var textA = a.itemName.toUpperCase();
          var textB = b.itemName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      
      console.log(inventoryFactory.inventory); 

      //Empty array
      // for (var i = itemFactory.worldItems.length; i > 0; i--) {
 
      //   itemFactory.worldItems.pop();
      // }
    }
    
  }})();