(function () {

myApp
  .factory('playerFactory', playerFactory);

  function playerFactory(
      rollFactory,
      itemFactory,
      inventoryFactory,
      $timeout,
      $rootScope) {

    var service = {
            player: { 
                health: 80,
                maxHealth: 100,
                hunger: 50,
                level: 1,
                exp: 0,
                expNeeded: 50,
                status: '',
                eating: false, 
                foraging: false,
                //stats
                statStrength: 10,
                statDefense: 10,
                statVitality: 5
            },

      getPlayer: getPlayer,
      eat: eat,
      forage: forage
    };    

    return service;

    /////////

    function getPlayer() {
        return service.player;
    }

    function eat() {
        
        if (service.player.hunger <= 0){

            service.player.hunger = 0;
            service.player.status = 'You are full!';
        } else {
            service.player.eating = true;
            $timeout(function(){
                
                service.player.hunger -= 10;
                if (service.player. health < service.player.maxHealth) {
                    service.player.health += 5;

                service.player.status = 'You ate!'
                } else if (service.player.health < service.player.maxHealth){

                    service.player.health += 5;
                    service.player.status = 'Your health improved'
                }

                if (service.player.health > service.player.maxHealth) {
                service.player.health = service.player.maxHealth;
                }
                service.player.eating = false;
            },2000);
        }
    }

    function forage() {
        if( service.player.foraging || service.player.health < 20 || service.player.hunger > 80)
        {
            service.player.status = 'You are not fit enough to hunt'
        } else {
            service.player.foraging = true;
            $timeout(function(){
                service.player.exp += 10;
                service.player.hunger += 20;
                
                rollFactory.getLoot();
                rollFactory.rollChance();

                service.player.status = 'You had a successful hunt!'

                //Level up
                if(service.player.exp >= service.player.expNeeded) {
                    service.player.level += 1;
                    service.player.exp = 0;
                    service.player.expNeeded += 3 * service.player.level;
                    service.player.maxHealth += 2 * service.player.level;

                    service.player.status = 'You leveled up!'
                }

                if (chance <= 30) {
                    service.player.health -= 20;

                    service.player.status = 'You got attacked by a monkey!'
                }
                service.player.foraging = false;
                // inventoryFactory.saveInventory();
            },3000)
        } 
    }
    
  }})();