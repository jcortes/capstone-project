(function () {
    'use strict';

    angular.module('app.core')
    .factory('userSession', userSession);
    
    function userSession() {
		return {
			loggedIn: false
		};
    }
    
})();
