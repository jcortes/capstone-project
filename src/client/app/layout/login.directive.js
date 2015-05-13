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

        function link(scope, element, attrs){
            
        }
        
        LoginController.$inject = ['$scope', '$location'];
        /* @ngInject */
        function LoginController($scope, $location) {
            var vm = this;
            
            vm.validateLogin = function() {
                // initiate auth popup
                SC.connect(function() {
                    console.log('validation');
                    
                    $location.path('/distro');
                    
                    SC.get('/me', function(me) { 
                        alert('Hello, ' + me.username); 
                    });
                });
            }
        }
    }
    
})();