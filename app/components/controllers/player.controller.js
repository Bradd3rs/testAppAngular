(function (){

    angular
        .module('myApp')
        .controller('playerCtrl', playerCtrl);

        function playerCtrl (
            
            playerFactory,
            rollFactory,
            inventoryFactory,
            itemFactory,
            $timeout)
            
            {

            var vm = this;
            
            vm.playerFactory = playerFactory;
            vm.player = playerFactory.getPlayer();
            vm.eat = eat;
            vm.eating = playerFactory.eating;
            vm.forage = forage;
            vm.rollChance = rollFactory.rollChance;
            vm.randomDrop = rollFactory.randomDrop;            
            vm.itemFactory = itemFactory;

            
            //////////
            
            function eat() {
                playerFactory.eat();
            }

            function forage() {
                playerFactory.forage();
            }
        }
})();

