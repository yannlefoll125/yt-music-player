'use strict';
const angular = require('angular');

import TrackModel from './TrackModel.class';
import AlbumModel from './AlbumModel.class';

/*@ngInject*/
export function albumModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.model = {};

	this.controllerCallback = null;


	this.setAlbumModelValues = function(title, description) {

	}

	this.setAlbumModelValuesFromApiResult = function(apiResult) {

	}

	this.setControllerCallback = function(callback) {

	}

	this.notifyController = function(event) {

	}

	this.parseTrackList = function(text) {
		
	} 


}

export default angular.module('ytMusicPlayerApp.albumModelMock', [])
.service('albumModel', albumModelService)
.name;
