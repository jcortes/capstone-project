(function () {
    'use strict';

    angular.module('app.layout')
    .directive('topNav', topNavDirective);

    function topNavDirective(){
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/layout/top-nav-template.html',
            scope: true,
            controller: TopNavController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            
        }
        
        function TopNavController() {
            var vm = this;
        }
    }

})();