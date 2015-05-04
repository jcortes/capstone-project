(function () {
    'use strict';

    angular.module('app.album')
    .directive('album', albumDirective);

    /* ngInject */
    function albumDirective() {
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/album/album-template.html',
            scope: true,
            controller: AlbumController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            
        }
        
        /* ngInject */
        function AlbumController() {
            var vm = this;
        }
    }

})();