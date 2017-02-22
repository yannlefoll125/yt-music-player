'use strict';
const angular = require('angular');

export default angular.module('ytMusicPlayerApp.ytPlayer', [])
.directive('ytPlayer', ['$window', function($window) {
  return {
    template: '<div class="youtube-player"></div>',
    restrict: 'E',
    scope: {
      control: '='
    },
    link: function(scope, element, attrs) {
      console.log('ytPlayer: link');
      var player;
      
      var initPlayer = function() {
        console.log('initPlayer for video: ' + scope.control.videoId);

        function createPlayer(videoId) {
          player = new YT.Player(element.children()[0], {

            videoId: videoId,
            playVars: {
              html5: 1
            }
          });
        }

        var scriptList = document.getElementsByTagName('script');
        console.log(scriptList);
        var apiReady = false;
        for(var tag of scriptList) {
          if(tag.src === "https://www.youtube.com/iframe_api") {
            var apiReady = true;
            break;
          }
        }

        if(apiReady) {
          console.log('onYouTubeIframeAPI already loaded');
          createPlayer(scope.control.videoId);
        } else {
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          $window.onYouTubeIframeAPIReady = function() {
            console.log('onYouTubeIframeAPIReady');
            createPlayer(scope.control.videoId);
            var apiReady = true;
          }
        }
        
      }

      initPlayer();

      scope.control.seekTo = function(/**number: start time in seconds*/ startTime) {
        console.log('ytPlayer: Start song at ' + startTime + ' seconds');
        player.seekTo(startTime, true);
        player.playVideo();
      }

      scope.control.play = function() {
        player.playVideo();
      }

      scope.control.pause = function() {
        player.pauseVideo();
      }
    }
  };
}])
.name;
