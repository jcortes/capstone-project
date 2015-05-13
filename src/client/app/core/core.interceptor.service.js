
(function () {
    'use strict';

    angular.module('app.core')
    .factory('authInterceptor', authInterceptor);
    
    authInterceptor.$inject = ['$location', 'userSession'];
    /* @ngInject */
    function authInterceptor($location, userSession) {
        return {
            request: request
		};
        
        function request(req) {
            if(!userSession.loggedIn) {
                var previousPage = $location.path();
                $location.path('/').search({
                    previous: previousPage
                });
            }
            return request;
        }
    }
    
})();