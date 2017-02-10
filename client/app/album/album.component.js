'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './album.routes';

export class AlbumComponent {
  /*@ngInject*/
  constructor($routeParams) {
    this.videoId = $routeParams['videoId'];

    console.log(this.videoId);
  }
}

AlbumComponent.$inject = ['$routeParams'];

export default angular.module('ytMusicPlayerApp.album', [ngRoute])
  .config(routes)
  .component('album', {
    template: require('./album.html'),
    controller: AlbumComponent
  })
  .name;
