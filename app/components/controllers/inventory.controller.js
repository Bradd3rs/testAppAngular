(function (){

    angular
        .module('myApp')
        .controller('inventoryCtrl', inventoryCtrl);

        function inventoryCtrl (
            inventoryFactory,
            playerFactory)
            
            {

            var vm = this;
            
            vm.inventory = inventoryFactory.getInventory();
            // vm.loadInventory = inventoryFactory.loadInventory();
            
            //////////

            // function getInventory() {
            //     inventoryFactory.getInventory();
            //     consol.log(inventoryFactory.inventory, 'tits');
            // }

        }
})();

