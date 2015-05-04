(function () {
    'use strict';

    angular.module('app.band')
    .directive('band', bandDirective);

    /* ngInject */
    function bandDirective() {
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/band/band-template.html',
            scope: true,
            controller: BandController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            
        }
        
        /* ngInject */
        function BandController() {
            var vm = this;
        }
    }

})();