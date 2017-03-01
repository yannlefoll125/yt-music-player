'use strict';
const angular = require('angular');

import MBArtistModel from './MBArtistModel.class';
import MBReleaseGroupModel from './MBReleaseGroupModel.class';

/*@ngInject*/
export function musicBrainzModelService(musicBrainzApi) {
	// AngularJS will instantiate a singleton by calling "new" on this function

	this.musicBrainzApi = musicBrainzApi;

	this.mbArtistList = [];
	this.mbReleaseGroupList = [];

	this.callbacks = {
		'artist-list': [],
		'release-group-list': []
	}

	this.on = function(event, callback) {
		if(this.callbacks[event].indexOf(callback) === -1) {
			this.callbacks[event].push(callback);
		}
	}

	this.notify = function(event, data) {
		for(var cb of this.callbacks[event]) {
			cb(event, data);
		}
	}

	this.unregister = function(event, callback) {
		var index = this.callbacks[event].indexOf(callback);
		if(index != -1) {
			this.callbacks[event].splice(index, 1);
		}
	}

	this.setMBArtistList = function(mbArtistList) {
		this.mbArtistList = mbArtistList;
		this.notify('artist-list', this.mbArtistList);
	}

	this.setMBReleaseGroupList = function(mbReleaseGroupList) {
		this.mbReleaseGroupList = mbReleaseGroupList;
		this.notify('release-group-list', this.mbReleaseGroupList);
	}

	this.searchArtist = function(query) {
		var self = this;
		self.musicBrainzApi.searchArtist(query, function(err, mbArtistList) {
			self.setMBArtistList(mbArtistList);
		});
	}

}

export default angular.module('ytMusicPlayerApp.musicBrainzModel', [])
  .service('musicBrainzModel', musicBrainzModelService)
  .name;
