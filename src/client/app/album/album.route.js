(function () {
    'use strict';

    angular.module('app.album')
    .config(bandConfig);
    
    bandConfig.$inject = ['$routeProvider'];
    /* @ngInject */
    function bandConfig($routeProvider){
        $routeProvider
        .when('/albums', {
            templateUrl : 'app/album/album.html',
            controller: 'AlbumController'
        });
    }

})();