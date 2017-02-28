'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './musicBrainz.routes';

export class MusicBrainzComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ytMusicPlayerApp.musicBrainz', [ngRoute])
  .config(routes)
  .component('musicBrainz', {
    template: require('./musicBrainz.html'),
    controller: MusicBrainzComponent,
    controllerAs: 'musicBrainzCtrl'
  })
  .name;
