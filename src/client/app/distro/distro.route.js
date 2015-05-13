(function () {
    'use strict';

    angular.module('app.distro')
    .config(distroConfig);
    
    distroConfig.$inject = ['$routeProvider'];
    /* @ngInject */
    function distroConfig($routeProvider){
        $routeProvider
        .when('/distro', {
            templateUrl : 'app/distro/distro.html',
            controller: 'DistroController'
        });
    }
    
})();