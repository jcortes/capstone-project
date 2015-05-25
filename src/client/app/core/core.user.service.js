(function () {
    'use strict';

    angular.module('app.core')
    .factory('listUsers', listUsers)
    .factory('userById', userById)
    .factory('createUser', createUser)
    .factory('validateUser', validateUser);

    
    listUsers.$inject = ['$http'];
    /* @ngInject */
    function listUsers($http) {
        return $http.get('/api/users');
    }
    
    userById.$inject = ['$http'];
    /* @ngInject */
    function userById($http) {
        return function(id) {
            console.log(id);
            return $http.get('/api/users/' + id);
        };
    }
    
    createUser.$inject = ['$http'];
    /* @ngInject */
    function createUser($http) {
        return function(user) {
            return $http.post('/api/users', user);
        };
    }
    
    validateUser.$inject = ['$http', 'listUsers', 'createUser', 'userById'];
    /* @ngInject */
    function validateUser($http, listUsers, createUser, userById) {
        return function(){
            SC.get('/me', function(me) {
                
                var user = null;
                userById(me.id).then(function(respose) {
                    console.log(respose.data);
                    user = respose.data;
                    console.log('User exists in database');
                    
                }, function(reason) {
                    console.log(reason);
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
                });
                
//                listUsers.then(function(response) {
//                    var user = response.data.filter(function(u){ return u.id === me.id; })[0];
//                    console.log(user);
//                });
            });
        };
    }
})();
