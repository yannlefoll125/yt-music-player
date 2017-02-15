'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './album.routes';
import AlbumViewModel from './AlbumViewModel.class';
import TrackViewModel from './TrackViewModel.class';


export class AlbumComponent {
  /*@ngInject*/
  constructor($routeParams, albumModel, youtubeDataApiService) {
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
