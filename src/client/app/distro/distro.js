(function () {
    'use strict';
    
    angular.module('app.distro')
    .controller('DistroController', DistroController);

    DistroController.$inject = ['$scope', '$location', 'userSession'];
    /* @ngInject */
    function DistroController($scope, $location, userSession) {
        var vm = this;
        
        if (!userSession.loggedIn) {
            $location.path('/login');
        }
    }
})();