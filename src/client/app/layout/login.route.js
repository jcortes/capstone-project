(function () {
    'use strict';

    angular.module('app.layout')
    .config(loginConfig);
    
    loginConfig.$inject = ['$routeProvider'];
    /* @ngInject */
    function loginConfig($routeProvider){
        $routeProvider
        .when('/login', {
            templateUrl : 'app/layout/login.html'
        });
    }

})();