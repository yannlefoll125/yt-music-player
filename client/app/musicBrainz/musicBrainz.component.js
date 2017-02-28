'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './musicBrainz.routes';

export class MusicBrainzComponent {
  /*@ngInject*/
  constructor($scope, musicBrainzApi) {
    this.message = 'Hello';

    var self = this;

    $scope.$on('search-submit-event-down', function(event, query) {
      console.log('MusicBrainzComponent: submit-search-event-down received with query: ' + query);
    });

  }
}

MusicBrainzComponent.$inject = ['$scope', 'musicBrainzApi'];

export default angular.module('ytMusicPlayerApp.musicBrainz', [ngRoute])
  .config(routes)
  .component('musicBrainz', {
    template: require('./musicBrainz.html'),
    controller: MusicBrainzComponent,
    controllerAs: 'musicBrainzCtrl'
  })
  .name;
