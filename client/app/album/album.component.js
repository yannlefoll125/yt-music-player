'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './album.routes';

class AlbumViewModel {
  constructor() {
    this.title = 'default title (ViewModel)';
    this.description = 'default description (ViewModel)';
  }

  setValuesFromAlbumModel(albumModel) {
    this.title = albumModel.title;
    this.description = albumModel.description;
  }
}

export class AlbumComponent {
  /*@ngInject*/
  constructor($routeParams, albumModel, youtubeDataApiService) {
    var self = this;

    this.youtubeDataApiService = youtubeDataApiService;
    this.albumModel = albumModel;

    this.albumViewModel = new AlbumViewModel();
    this.albumModel.setControllerCallback(function(event) {
      console.log(self.albumViewModel);
      console.log(self.albumModel.model);
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

  onModelEvent(event) {
    console.log(self.albumViewModel);
    switch(event) {
      case 'model-update':
      self.albumViewModel.setValuesFromAlbumModel(this.albumViewModel.model);
      break;
    }
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
