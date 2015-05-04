(function () {
    'use strict';

    angular.module('app.band')
    .config(bandConfig);
    
    bandConfig.$inject = ['$routeProvider'];
    /* @ngInject */
    function bandConfig($routeProvider){
        $routeProvider
        .when('/bands', {
            templateUrl : 'app/band/band.html'
        });
    }

})();