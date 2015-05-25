(function () {
    'use strict';

    angular.module('app.core')
    .factory('listUsers', listUsers)
    .factory('createUser', createUser)
    .factory('validateUser', validateUser);

    listUsers.$inject = ['$http'];
    /* @ngInject */
    function listUsers($http) {
        return $http.get('/api/users');
    }
    
    createUser.$inject = ['$http'];
    /* @ngInject */
    function createUser($http) {
        return function(user) {
            return $http.post('/api/users', user);
        };
    }
    
    validateUser.$inject = ['$http', 'listUsers', 'createUser'];
    /* @ngInject */
    function validateUser($http, listUsers, createUser) {
        return function(){
            return SC.get('/me', function(me) {
                var user = null;
                listUsers.then(function(response) {
                    console.log(response);
                    user = response.data.filter(function(u){ return u.id === me.id; })[0];
                    if(!user){
                        user = {
                            id: me.id,
                            username: me.username,
                            uri: me.uri,
                            first_name: me.first_name,
                            last_name: me.last_name,
                            full_name: me.full_name,
                            avatar_url: me.avatar_url
                        };
                        createUser(user).then(function(data){
                            console.log('User created in database');
                        });
                    } else {
                        console.log('User exists in database');
                    }
                });
            });
        };
    }
})();
