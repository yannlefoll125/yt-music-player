'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './album.routes';

class AlbumViewModel {
  constructor() {
    this.title = 'default title';
    this.description = 'default description';
  }

  setValuesFromApiItem(apiItem) {
    this.title = apiItem.snippet.title;
    this.description = apiItem.snippet.description;
  }
}

export class AlbumComponent {
  /*@ngInject*/
  constructor($routeParams, currentSearch) {
    this.videoId = $routeParams['videoId'];

    this.albumViewModel = new AlbumViewModel();

    var videoApiItem = currentSearch.getVideoById(this.videoId);

    if(videoApiItem != null) {
      this.albumViewModel.setValuesFromApiItem(videoApiItem)
    }
    
  }
}

AlbumComponent.$inject = ['$routeParams', 'currentSearch'];

export default angular.module('ytMusicPlayerApp.album', [ngRoute])
  .config(routes)
  .component('album', {
    template: require('./album.html'),
    controller: AlbumComponent
  })
  .name;
