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
        
        LoginController.$inject = ['$scope', '$location', 'userSession'];
        /* @ngInject */
        function LoginController($scope, $location, userSession) {
            var vm = this;
            
            vm.previousPage = $location.search().previous;
            
            vm.validateLogin = function() {
                // initiate auth popup
                SC.connect(function() {
                    SC.get('/me', function(me) { 
                        console.log(me);
                    });
                    
                    $scope.$apply(function(){
                        userSession.loggedIn = true;
                        $location.path(vm.previousPage || '/distro');
                    })
                });
            }
        }
    }
    
})();