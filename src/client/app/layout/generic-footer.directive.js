(function () {
    'use strict';

    angular.module('app.layout')
    .directive('genericFooter', genericFooterDirective);

    function genericFooterDirective() {
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/layout/generic-footer-template.html',
            scope: true,
            controller: GenericFooterController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: false
        };
        return ddo;

        function link(scope, element, attrs){
            
        }
        
        function GenericFooterController() {
            var vm = this;
        }
    }

})();