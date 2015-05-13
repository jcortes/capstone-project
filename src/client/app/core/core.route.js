(function () {
    'use strict';

    angular.module('app.core')
    .config(coreConfig);
    
    coreConfig.$inject = ['$locationProvider', '$routeProvider'];
    /* @ngInject */
    function coreConfig($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/callback', {
            templateUrl : 'callback.html',
            controller: CallbackController,
        })
        .otherwise({
            redirectTo : '/'
        });
    }

    CallbackController.$inject = ['$scope', '$location'];
    /* @ngInject */
    function CallbackController($scope, $location) {
        var vm = $scope;
        
        // initiate auth popup
        SC.connect(function() {
            $location.path('/distro');
        });
    }
    
})();
