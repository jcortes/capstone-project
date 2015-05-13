(function () {
    'use strict';
    
    angular.module('app.band')
    .controller('BandController', BandController);

    BandController.$inject = ['$scope', '$location', 'userSession'];
    /* @ngInject */
    function BandController($scope, $location, userSession) {
        var vm = this;
        
        if (!userSession.loggedIn) {
            $location.path('/login');
        }
    }
})();