'use strict';
const angular = require('angular');

class SearchResultModel {
	constructor(apiSearchResult) {
		this.title = apiSearchResult.snippet.title;
		this.description = apiSearchResult.snippet.description;
		this.videoId = apiSearchResult.id.videoId;
	}


}

/*@ngInject*/
export function searchResultModelService($cookies) {
	// AngularJS will instantiate a singleton by calling "new" on this function

	this.videoItemList = [];

	this.setVideoItemList = function(itemList) {

		for(var v of itemList) {
			this.videoItemList.push(new SearchResultModel(v));
		}
		this.notifyListener('video-item-list-update');

	}

	this.getVideoItemList = function() {
		return this.videoItemList;
	}

	this.getVideoById = function(videoId) {
	
		var resultArray = this.videoItemList.filter(function(curr) {
			if(curr.id.videoId === this) {
				return true;
			} else {
				return false;
			}
		}, videoId);

		if(resultArray.length > 0) {
			return resultArray[0];
		} else {
			return null;
		}
		
	}


	//Observer pattern
	this.listenerList = [];

	this.addListener = function(callback) {

		this.listenerList.push(callback);

	}

	this.removeListener = function(callback) {
		var index = this.listenerList.indexOf(callback);
		if(index >= 0 && index < this.listenerList.length) {
			this.listenerList = this.listenerList.splice(index, 1);
		}
	}

	this.notifyListener = function(event) {

		for(var callback of this.listenerList) {
			callback(event);
		}
	}
};

export default angular.module('ytMusicPlayerApp.currentSearch', [])
  .service('searchResultModel', searchResultModelService)
  .name;
