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
    
    DistroController.$inject = ['$scope', '$location'];
    /* @ngInject */
    function DistroController($scope, $location){
        var vm = $scope;
        
        // initiate auth popup
        SC.connect(function() {
//            $location.path('/distro');
        });
    }

})();