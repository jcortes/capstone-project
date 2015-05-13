(function () {
    'use strict';

    angular.module('app.core')
    .factory('dbTracksRequest', dbTracksRequest);

    dbTracksRequest.$inject = ['$http'];
    /* @ngInject */
    function dbTracksRequest($http) {
        return {
            getTracks: getTracks
        };

        function getTracks() {
//            return $http.get('/api/shield')
//            .then(getTracksComplete)
//            .catch(getTracksFailed);
//
//            function getTracksComplete(response) {
//                return response.data.results;
//            }
//
//            function getTracksFailed(error) {
//                logger.error('XHR Failed for getTracks.' + error.data);
//            }
            return SC.get('/tracks', query, response);
            var query = { q: 'powerviolence', license: 'cc-by-sa' };
            function response(tracks) { 
                console.log(tracks[0].id); 
                SC.stream("/tracks/" + tracks[0].id, function(sound){
                    sound.play();
                });
            }
        }
        
    }
})();