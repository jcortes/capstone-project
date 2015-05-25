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
        
        LoginController.$inject = ['$scope', '$location', '$http', 'userSession'];
        /* @ngInject */
        function LoginController($scope, $location, $http, userSession) {
            var vm = this;
            
            if (userSession.loggedIn) {
                $location.path('/distro');
            }
            
            vm.previousPage = $location.search().previous;
            
            vm.validateLogin = function() {
                // initiate auth popup
                SC.connect(function() {
                    SC.get('/me', function(me) {
                        var userFound = false;
                        var user = {
                            id: me.id,
                            username: me.username,
                            uri: me.uri,
                            first_name: me.first_name,
                            last_name: me.last_name,
                            full_name: me.full_name,
                            avatar_url: me.avatar_url
                        };
                        $http.get('/api/users').success(function(response) {
                            console.log(response);
                            
                            $http.post('/api/users', user).success(function(data, status) {
                                console.log(data);
                            });
                        });
                    });
                    
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