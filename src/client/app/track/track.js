(function () {
    'use strict';
    angular.module('app.track')
    .controller('TrackController', TrackController);

    TrackController.$inject = ['$scope', '$location', 'userSession', 'dbTracks', 'SC_CLIENT_ID']
    /* @ngInject */
    function TrackController($scope, $location, userSession, dbTracks, SC_CLIENT_ID){
        var vm = this;
        vm.tracks = null;
        vm.trackTitle = null;
        vm.client_id = '?client_id=' + SC_CLIENT_ID;
        
        if (!userSession.loggedIn) {
            $location.path('/login');
        }
        
        vm.getTracks = function() {
            dbTracks.getTracks(vm.trackName)
            .then(function(data) {
                console.log(data);
                vm.tracks = data;
            });
        };
        
        vm.selectTrack = function(track) {
            vm.trackTitle = track.title;
        };
    }
})();