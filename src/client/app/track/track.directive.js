(function () {
    'use strict';

    angular.module('app.track')
    .directive('track', trackDirective);

    /* @ngInject */
    function trackDirective(){
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/track/track-template.html',
            scope: true,
            controller: 'TrackController',
            controllerAs: 'tc',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            
        }
    }

})();