'use strict';
const angular = require('angular');

export default angular.module('ytMusicPlayerApp.ytPlayer', [])
.directive('ytPlayer', ['$window', function($window) {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function(scope, element, attrs) {
      //element.text('this is the ytPlayer directive');

      //scope.videoId = attrs['videoId'];
      //scope.playerDiv = element.getElementById('player');

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      var player;

      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {
          height: 360,
          width: 640,
          videoId: '71zwQWWK24U'
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function onPlayerStateChange(event) {

      }
    }
  };
}])
.name;
