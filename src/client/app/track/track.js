(function () {
    'use strict';
    angular.module('app.track')
    .controller('TrackController', TrackController);

    TrackController.$inject = ['$scope', '$location', 'userSession', 'dbTracksRequest']
    /* @ngInject */
    function TrackController($scope, $location, userSession, dbTracksRequest){
        var vm = this;
        
        if (!userSession.loggedIn) {
            $location.path('/login');
        }
        
        vm.getTracks = getTracks;

        function getTracks() {
//            return dbTracksRequest.getTracks()
//                .then(function(data) {
//                vm.tracks = data;
//                return vm.tracks;
//            });
            dbTracksRequest.getTracks();
        }
    }
})();