'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './musicBrainz.routes';
import MBArtistViewModel from './viewmodel/MBArtistViewModel.class';

export class MusicBrainzComponent {
  /*@ngInject*/
  constructor($scope, musicBrainzModel) {
    this.message = 'Hello';
    this.musicBrainzModel = musicBrainzModel;

    this.mbArtistViewModelList = [];

    var self = this;

    this.musicBrainzModel.on('artist-list', function(event, data) {
      self.mbArtistViewModelList = [];
      for(var mbArtistModel of data) {
        self.mbArtistViewModelList.push(new MBArtistViewModel(mbArtistModel));
      }

      console.log('MusicBrainzComponent: mbArtistViewModelList updated');
      console.log(self.mbArtistViewModelList);
    });

    $scope.$on('search-submit-event-down', function(event, query) {
      console.log('MusicBrainzComponent: submit-search-event-down received with query: ' + query);
        self.musicBrainzModel.searchArtist(query);

    });

  }
}

MusicBrainzComponent.$inject = ['$scope', 'musicBrainzModel'];

export default angular.module('ytMusicPlayerApp.musicBrainz', [ngRoute])
  .config(routes)
  .component('musicBrainz', {
    template: require('./musicBrainz.html'),
    controller: MusicBrainzComponent
  })
  .name;
