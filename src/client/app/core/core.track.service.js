(function () {
    'use strict';

    angular.module('app.core')
    .factory('dbRequest', dbRequest)
    .factory('dbTracks', dbTracks);

    dbRequest.$inject = ['$http', '$q', 'SC_API_PREFIX'];
    /* @ngInject */
    function dbRequest($http, $q, SC_API_PREFIX) {
        return function (path) {
            console.log(SC_API_PREFIX + path);
            var defer = $q.defer();
            $http.get(SC_API_PREFIX + path)
            .success(function(data){
                defer.resolve(data);
            })
            .error(function(data, status){
                console.log('Error status: ' + status);
            });
            return defer.promise;
        };
    }
    
    dbTracks.$inject = ['$http', '$q', '$interpolate', 'dbRequest', 'SC_CLIENT_ID', 'SC_API_TRACKS'];
    /* @ngInject */
    function dbTracks($http, $q, $interpolate, dbRequest, SC_CLIENT_ID, SC_API_TRACKS) {
        return {
            getTracks: getTracks
        };

        function getTracks(title) {
            
            var defer = $q.defer();
            var path = $interpolate(SC_API_TRACKS)({
                client_id: SC_CLIENT_ID,
                limit: 5,
                q: title
            });
            dbRequest(path).then(function(data) {
                defer.resolve(data);
            });
            return defer.promise;
            
//            return SC.get('/tracks', query, response);
//            var query = { q: 'powerviolence', license: 'cc-by-sa' };
//            function response(tracks) { 
//                console.log(tracks[0].id); 
//                SC.stream("/tracks/" + tracks[0].id, function(sound){
//                    sound.play();
//                });
//            }
        }
        
    }
})();