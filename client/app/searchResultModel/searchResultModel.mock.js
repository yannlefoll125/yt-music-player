'use strict';
const angular = require('angular');

/*@ngInject*/
export function searchResultModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function

	this.videoItemList = [];

	this.setVideoItemList = function(itemList) {
		

	}

	this.getVideoItemList = function() {
		return [];
	}

	this.getVideoById = function(videoId) {
		return {};
	}


	//Observer pattern
	this.listenerList = [];

	this.addListener = function(callback) {

	}

	this.removeListener = function(callback) {

	}

	this.notifyListener = function(event) {

	}
};

export default angular.module('ytMusicPlayerApp.searchResultModelMock', [])
  .service('searchResultModel', searchResultModelService)
  .name;
