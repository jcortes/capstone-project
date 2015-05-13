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
        
         // Open a new window
        var myWindow = window.open("", "Login", "width=200, height=100");

//        window.opener.setTimeout(window.opener.SC.connectCallback, 1);
        myWindow.opener.setTimeout(myWindow.opener.SC.connectCallback, 1);
    }

})();