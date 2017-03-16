'use strict';
const angular = require('angular');

/*@ngInject*/
export function musicBrainzModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.on = function(event, callback) {

	}

	this.notify = function(event, data) {

	}

	this.unregister = function(event, callback) {

	}

	this.setMBArtistList = function(mbArtistList) {

	}

	this.setMBReleaseGroupList = function(mbReleaseGroupList) {

	}

	this.searchArtist = function(query) {

	}
}

export default angular.module('ytMusicPlayerApp.musicBrainzModelMock', [])
  .service('musicBrainzModel', musicBrainzModelService)
  .name;
