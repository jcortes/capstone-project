(function () {
    'use strict';

    angular.module('app.core')
    .config(coreConfig)
    .controller('MainController', MainController);
    
    coreConfig.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];
    /* @ngInject */
    function coreConfig($locationProvider, $routeProvider, $httpProvider){
        $locationProvider.hashPrefix('!');
        
        $httpProvider.defaults.useXDomain = true;
        // add interceptor
//		$httpProvider.interceptors.push('authInterceptor');
        
        $routeProvider
        .when('/logout', {
            template : '',
            controller : LogoutController
        })
        .otherwise({
            redirectTo : '/login'
        });
    }

    LogoutController.$inject = ['$location', 'userSession'];
    /* @ngInject */
    function LogoutController($location, userSession) {
		userSession.loggedIn = false;
		$location.path('/login');
	}
    
    MainController.$inject = ['$scope', 'userSession'];
    /* @ngInject */
    function MainController($scope, userSession) {
        var vm = $scope;
        
		vm.loggedIn = userSession.loggedIn; 
		$scope.$watch(function() { return userSession.loggedIn }, function(newVal, oldVal){
			vm.loggedIn = newVal;
		})
    }
    
})();
