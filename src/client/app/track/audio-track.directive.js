(function () {
    'use strict';

    angular.module('app.track')
    .directive('audioTrack', audioTrackDirective);

    audioTrackDirective.$inject = ['$sce'];
    /* @ngInject */
    function audioTrackDirective($sce) {
        var ddo = {
            restrict: 'EA',
            link: link,
            templateUrl: 'app/track/audio-track-template.html',
            scope: true,
            controller: AudioTrackController,
            controllerAs: 'atc',
            bindToController: true,
            transclude: true
        };
        return ddo;

        function link(scope, element, attrs) {
            
            var audioPlayer = element.find('audio')[0];
            scope.sources = [];
            
            function processSources() {
                var sourceTypes = {
                    mp3: {type: 'audio/mpeg'},
                    ogg: {type: 'audio/ogg'},
                    mp4: {type: 'audio/mp4'},
                    oga: {type: 'audio/ogg'},
                    webma: {type: 'audio/webm'},
                    wav: {type: 'audio/wav'}
                };
                for(var source in sourceTypes){
                    if(attrs.hasOwnProperty(source)){
                        scope.sources.push({
                            type: sourceTypes[source].type,
                            src: $sce.trustAsResourceUrl(attrs[source])
                        });
                    }
                }
            }
            processSources();
            
            var btnPause = element.find('.button-pause');
            var btnPlay = element.find('.button-play');
            var btnStop = element.find('.button-stop');
            
            scope.audio = {
                play: function() {
                    btnPlay.blur();
                    btnPlay.addClass('active');
                    btnPause.removeClass('active');
                    audioPlayer.play();
                },
                pause: function() {
                    btnPause.blur();
                    btnPause.addClass('active');
                    btnPlay.removeClass('active');
                    audioPlayer.pause();
                },
                stop: function() {
                    btnStop.blur();
                    btnPlay.removeClass('active');
                    btnPause.removeClass('active');
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                }
            };
        }
    }

    AudioTrackController.$inject = ['$scope', '$element'];
    /* @ngInject */
    function AudioTrackController($scope, $element) {
        var vm = this;
        vm.audioPlayer = $element.find('audio')[0];
    }
})();
