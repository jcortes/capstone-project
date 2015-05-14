(function () {
    'use strict';

    angular.module('app.distro')
    .directive('distro', distroDirective);

    /* @ngInject */
    function distroDirective(){
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/distro/distro-template.html',
            scope: true,
            controller: 'DistroController',
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs) {
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