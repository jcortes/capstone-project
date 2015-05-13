(function () {
    'use strict';
    angular.module('app.track')
    .controller('TrackController', TrackController);

    TrackController.$inject = ['$scope','dbTracksRequest']
    /* @ngInject */
    function TrackController($scope, dbTracksRequest){
        var vm = this;
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