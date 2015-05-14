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
            controller: 'AlbumController',
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            var urlImg = 'http://placehold.it/1920x400';
            
            var elem = element.find('.db-header');
            elem.css({
                'height': '400px',
                'background': 'url(' + urlImg + ') center center no-repeat scroll',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                'background-size': 'cover',
                '-o-background-size': 'cover'
            });
        }
    }

})();