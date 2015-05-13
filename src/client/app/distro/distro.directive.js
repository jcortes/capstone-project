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
        }
    }

})();