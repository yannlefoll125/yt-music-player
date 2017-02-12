'use strict';
const angular = require('angular');

/*@ngInject*/
export function currentSearchService($cookies) {
	// AngularJS will instantiate a singleton by calling "new" on this function

	//this.videoItemList = [];

	this.setVideoItemList = function(itemList) {

		//this.videoItemList = itemList;
		$cookies.putObject('videoItemList', itemList);
		this.notifyListener('video-item-list-update');

	}

	this.getVideoItemList = function() {
		return $cookies.getObject('videoItemList');
	}

	this.getVideoById = function(videoId) {

		var videoItemList = $cookies.getObject('videoItemList');
		var resultArray = videoItemList.filter(function(curr) {
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


	this.setCurrentVideoDetail = function(videoDetail) {
		$cookies.putObject('currentVideoDetail', videoDetail);
	}

	this.getCurrentVideoDetail = function(currentVideoDetail) {
		return $cookies.getObject('currentVideoDetail');
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
  .service('currentSearch', currentSearchService)
  .name;
