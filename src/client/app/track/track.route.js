(function () {
    'use strict';

    angular.module('app.track')
    .config(trackConfig);
    
    trackConfig.$inject = ['$routeProvider'];
    /* @ngInject */
    function trackConfig($routeProvider){
        $routeProvider
        .when('/tracks', {
            templateUrl : 'app/track/track.html'
        });
    }

})();