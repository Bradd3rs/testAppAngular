(function (){

    angular
        .module('myApp')
        .controller('statsCtrl', statsCtrl);

        function statsCtrl (
            playerFactory)
            
            {

            var vm = this;
            
            vm.playerFactory = playerFactory;
            vm.player = playerFactory.getPlayer();

            //////////
            
            // function eat() {
            //     playerFactory.eat();
            // }
        }
})();

