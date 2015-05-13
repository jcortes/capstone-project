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
            controller: DistroController
        });
    }
    
    DistroController.$inject = ['$scope'];
    /* @ngInject */
    function DistroController($scope){
        var vm = $scope;
        
        window.opener.setTimeout(window.opener.SC.connectCallback, 1);
    }

})();