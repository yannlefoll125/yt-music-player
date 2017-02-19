'use strict';
const angular = require('angular');

const YOUTUBE_DATA_API = false;

import YoutubeDataApiServiceError from './youtubeDataApiService.error'

/*@ngInject*/
export function youtubeDataApiService($http) {
	const API_KEY = "AIzaSyBDSw_0thz4nBujrwcHmiwcRimRT_AmuG0";
	const API_URL = "https://www.googleapis.com/youtube/v3";
	const DEFAULT_RES_NUMBER = 10;

	//Get a lisf of videos corresponding to a query. The callback returns a list of items
	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

		var resCount = 0;
		var url = API_URL + '/search';

		//Items to return to controller in callback
		var itemList = [];

		var params = {
			key: API_KEY,
			part: "snippet",
			q: query.toString() + " full album",
			type: "video"
		};

		var loopCount = 0;
		var maxLoop = 20;

		var totalResults;
		//function to call to get next page of result. Call once directly to start to get
		//results from the API, then called from the $http.get callback to call next page.
		function getNextPage() {
			loopCount++;


			$http.get(url, {params: params}).then(function success(res) {
				totalResults = res.data.pageInfo.totalResults;

				itemList = itemList.concat(res.data.items);

				//count number of results
				resCount += res.data.items.length;

				console.log('totalResults: ' + totalResults + ", resCount: " + resCount);

				if(resCount < resNumber && resCount < totalResults && !!res.data.nextPageToken && loopCount < maxLoop) {

					//Update HTTP request params to fetch the next page
					params.pageToken = res.data.nextPageToken;

					getNextPage();
				} else {

					//When all pages have been fetched, return result to caller
					callback(false, itemList);
				}


			}, function error(res) {

				console.error(res);
			});
		}

		getNextPage();
		

	}


	this.getVideoDetail = function(videoId, callback) {
		var params = {
			key: API_KEY,
			part: 'snippet',
			id: videoId.toString()
		};

		var url = API_URL + '/videos';

		$http.get(url, {params: params}).then(function(res) {
			var itemList = res.data.items;

			if(itemList.length > 0) {
				callback(false, itemList[0]);
			} else {
				console.log(YoutubeDataApiServiceError.VIDEO_NOT_FOUND);
				callback(YoutubeDataApiServiceError.VIDEO_NOT_FOUND);
			}
		}, function(res) {
			callback(YoutubeDataApiServiceError.API_ERROR);
		})
	}

}

export default angular.module('ytMusicPlayerApp.youtubeDataApiService', [])
.service('youtubeDataApiService', youtubeDataApiService)
.name;


