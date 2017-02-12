'use strict';
const angular = require('angular');

class AlbumModel {
	constructor() {
		this.title = 'default title';
		this.description = 'default description';
	}
}

/*@ngInject*/
export function albumModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.model = new AlbumModel();

	this.controllerCallback = null;


	this.setAlbumModelValues = function(title, description) {
		this.model.title = title;
		this.model.description = description;
		this.notifyController('model-update');
	}

	this.setAlbumModelValuesFromApiResult = function(apiResult) {
		this.model.title = apiResult.snippet.title;
		this.model.description = apiResult.snippet.description;
		this.notifyController('model-update');
	}

	this.setControllerCallback = function(callback) {
		this.controllerCallback = callback;
	}

	this.notifyController = function(event) {
		this.controllerCallback(event);
	}

}

export default angular.module('ytMusicPlayerApp.albumModel', [])
  .service('albumModel', albumModelService)
  .name;
