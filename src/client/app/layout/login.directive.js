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
                    
//                    SC.get('/me', function(me) {
//                        $http.get('/api/users').success(function(response) {
//                            
//                            var user = response.filter(function(u){ return u.id === me.id; })[0];
//                            if(!user){
//                                user = {
//                                    id: me.id,
//                                    username: me.username,
//                                    uri: me.uri,
//                                    first_name: me.first_name,
//                                    last_name: me.last_name,
//                                    full_name: me.full_name,
//                                    avatar_url: me.avatar_url
//                                };
//                                $http.post('/api/users', user).success(function(data, status) {
//                                    console.log('User created in database');
//                                });
//                            } else {
//                                console.log('User exists in database');
//                            }
//                        });
//                    });
                    
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