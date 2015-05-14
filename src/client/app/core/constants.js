/* global version:0.0.0 */
(function() {
    'use strict';

    angular.module('app.core')
    .constant('SC_REDIRECT_URI', 'http://distro-bands.herokuapp.com/callback.html')
    .constant('SC_CLIENT_ID', '3339e38285915d3cddd8ee6e18c35b4e')
    .constant('SC_API_PREFIX', 'https://api.soundcloud.com')
    .constant('SC_API_TRACKS', '/tracks.json?client_id={{ client_id }}&limit={{ limit }}&q={{ q }}');
})();
