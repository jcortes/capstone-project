(function () {
    'use strict';
    
    angular.module('app.layout')
    .directive('login', loginDirective);

    /* @ngInject */
    function loginDirective() {
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/layout/login-template.html',
            scope: true,
            controller: LoginController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs) {
            
        }
        
        LoginController.$inject = ['$scope', '$location', '$http', 'userSession', 'validateUser'];
        /* @ngInject */
        function LoginController($scope, $location, $http, userSession, validateUser) {
            var vm = this;
            
            if (userSession.loggedIn) {
                $location.path('/distro');
            }
            
            vm.previousPage = $location.search().previous;
            
            vm.validateLogin = function() {
                // initiate auth popup
                SC.connect(function() {
                    validateUser();
                    
                    $scope.$apply(function(){
                        userSession.loggedIn = true;
                        $location.path(vm.previousPage || '/distro');
                    });
                });
                
//                userSession.loggedIn = true;
//                $location.path(vm.previousPage || '/distro');
            }
        }
    }
    
})();