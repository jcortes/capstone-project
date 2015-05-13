(function () {
    'use strict';

    angular.module('app.core')
    .config(config);

    config.$inject = ['SC_CLIENT_ID', 'SC_REDIRECT_URI'];
    /* @ngInject */
    function config(SC_CLIENT_ID, SC_REDIRECT_URI) {
        SC.initialize({
            client_id: SC_CLIENT_ID,
            redirect_uri: SC_REDIRECT_URI
        });
    };
})();
