'use strict';
const angular = require('angular');

/*@ngInject*/
export function youtubeDataApiService() {
	const API_KEY = "AIzaSyBDSw_0thz4nBujrwcHmiwcRimRT_AmuG0";
	const API_URL = "https://www.googleapis.com/youtube/v3";
	const DEFAULT_RES_NUMBER = 10;

	//Get a lisf of videos corresponding to a query. The callback returns a list of items
	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

	}


	this.getVideoDetail = function(videoId, callback) {
		
	}

}

export default angular.module('ytMusicPlayerApp.youtubeDataApiServiceMock', [])
.service('youtubeDataApiService', youtubeDataApiService)
.name;


