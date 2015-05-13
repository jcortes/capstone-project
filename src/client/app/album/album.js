(function () {
    'use strict';
    
    angular.module('app.album')
    .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['$scope', '$location', 'userSession'];
    /* @ngInject */
    function AlbumController($scope, $location, userSession) {
        var vm = this;
        
        if (!userSession.loggedIn) {
            $location.path('/login');
        }
    }
})();