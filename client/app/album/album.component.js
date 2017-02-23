'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './album.routes';
import AlbumViewModel from './AlbumViewModel.class';
import TrackViewModel from './TrackViewModel.class';


export class AlbumComponent {
  /*@ngInject*/
  constructor($routeParams, albumModel, youtubeDataApiService) {
    console.log('AlbumComponent: constructor start');
    var self = this;

    this.youtubeDataApiService = youtubeDataApiService;
    this.albumModel = albumModel;

    this.albumViewModel = new AlbumViewModel();
    this.albumModel.setControllerCallback(function(event) {

      switch(event) {
        case 'model-update':
        self.albumViewModel.setValuesFromAlbumModel(self.albumModel.model);
        break;
      }
    });
    

    this.videoId = $routeParams['videoId'];

    youtubeDataApiService.getVideoDetail(this.videoId, function(err, videoDetail) {

      if(err) {

      } else {
        self.albumModel.setAlbumModelValuesFromApiResult(videoDetail);

      }

      
    });

    this.currentTime;

    this.showPlayButton = true;
    this.ytPlayerControl = {
      videoId: this.videoId,
      currentTimeCallback: function(currentTime) {

        self.currentTime = currentTime;
        var track = self.albumModel.findTrack(self.currentTime);
        self.albumViewModel.setActiveTrack(track.num);
      }

    };

    
    //this.ytPlayerControl.initPlayer(this.videoId);
    console.log('AlbumComponent: constructor end');
  }



  onTrackSelect(track) {
    console.log('album controller: onTrackSelect()');
    this.showPlayButton = false;
    this.albumModel.trackSelected();
    this.ytPlayerControl.seekTo(track.start);
    this.albumViewModel.setActiveTrack(track.num);
  }

  onPlayClick() {
    var self = this;
    var currentTime = this.ytPlayerControl.getCurrentTime();

    
    this.albumModel.play(currentTime, function(trackNumber) {
      self.showPlayButton = false;
      self.ytPlayerControl.play();
      
      self.albumViewModel.setActiveTrack(trackNumber);
    });
  }

  onPauseClick() {
    var self = this;
    this.albumModel.pause(function() {
      self.showPlayButton = true;
      self.ytPlayerControl.pause();
    });
  }

  onPreviousClick() {
    var self = this;
    var currentTime = this.ytPlayerControl.getCurrentTime();
    this.albumModel.previous(currentTime, function(trackNumber, trackStart) {
      self.ytPlayerControl.seekTo(trackStart);
      self.albumViewModel.setActiveTrack(trackNumber);

    });
  }

  onNextClick() {
    var self = this;
    var currentTime = this.ytPlayerControl.getCurrentTime();
    this.albumModel.next(currentTime, function(trackNumber, trackStart) {
      self.ytPlayerControl.seekTo(trackStart);
      self.albumViewModel.setActiveTrack(trackNumber);

    });
  }



}

AlbumComponent.$inject = ['$routeParams', 'albumModel', 'youtubeDataApiService'];

export default angular.module('ytMusicPlayerApp.album', [ngRoute])
.config(routes)
.component('album', {
  template: require('./album.html'),
  controller: AlbumComponent
})
.name;
