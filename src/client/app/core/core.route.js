(function () {
    'use strict';

    angular.module('app.core')
    .config(coreConfig);
    
    coreConfig.$inject = ['$locationProvider', '$routeProvider'];
    /* @ngInject */
    function coreConfig($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider
//        .when('/login', {
//            templateUrl : 'callback.html',
//            controller: CallbackController,
//        })
        .otherwise({
            redirectTo : '/'
        });
    }

    CallbackController.$inject = ['$scope'];
    /* @ngInject */
    function CallbackController($scope) {
        var vm = $scope;
        
        // initiate auth popup
        SC.connect(function() {
//            SC.get('/me', function(me) {
//                alert('Hello, ' + me.username);
//            });
        });
    }
    
})();
