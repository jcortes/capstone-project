(function () {
    'use strict';

    angular.module('app.core')
    .config(coreConfig);
    
    coreConfig.$inject = ['$locationProvider', '$routeProvider'];
    /* @ngInject */
    function coreConfig($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo : '/'
        });
    }

    CallbackController.$inject = ['$scope'];
    /* @ngInject */
    function CallbackController($scope) {
        var vm = $scope;
    }
    
})();
