(function () {
    'use strict';

    angular.module('app.track')
    .directive('progressSlider', progressSliderDirective);

    function progressSliderDirective() {
        var ddo = {
            require: '?^audioTrack',
            restrict: 'A',
            link: link
        };
        return ddo;

        function link(scope, element, attrs, atc) {
            
            var progressSlider = angular.element(element.slider({
                min: 0, max: 100, step: 1, value: 0,
                orientation: "horizontal",
                slide: function(event, ui) {
                    scope.$apply(function() {
                        var currt = parseFloat((ui.value * atc.audioPlayer.duration) / 100);
                        atc.audioPlayer.currentTime = currt;
                    });
                },
//                change: function(event, ui) {
//                    scope.$apply(function() {
//                        var currt = parseFloat((ui.value * atc.audioPlayer.duration) / 100);
//                        atc.audioPlayer.currentTime = currt;
//                    })
//                }
            }));
            
            atc.audioPlayer.addEventListener('timeupdate', function() {
                progressSlider.slider('option', 'value', 
                    parseInt((atc.audioPlayer.currentTime * 100) / atc.audioPlayer.duration));
            });
        }
    }

})();
