'use strict';
const angular = require('angular');

const YOUTUBE_DATA_API = false;

const DEFAULT_RES_NUMBER = 10;

/*@ngInject*/
export function youtubeDataApiService($http) {
	const API_KEY = "AIzaSyBDSw_0thz4nBujrwcHmiwcRimRT_AmuG0";
	const API_URL = "https://www.googleapis.com/youtube/v3";
	

	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

		console.log('youtubeDataApiService.searchVideo()');

		var resCount = 0;
		var url = API_URL + '/search';

		//Items to return to controller in callback
		var itemList = [];

		var params = {
			key: API_KEY,
			part: "snippet",
			q: query.toString() + "full album",
			type: "video"
		};

		//function to call to get next page of result. Call once directly to start to get
		//results from the API, then called from the $http.get callback to call next page.
		function getNextPage() {
			$http.get(url, {params: params}).then(function success(res) {

				itemList = itemList.concat(res.data.items);

				//count number of results
				resCount += res.data.items.length;

				if(resCount < resNumber) {

					//Update HTTP request params to fetch the next page
					params.pageToken = res.data.nextPageToken;


					getNextPage();
				} else {

					//When all pages have been fetched, return result to caller
					callback(false, itemList);
				}


			}, function error(res) {

				//TODO: manage errors
				console.error(res);
			});
		}

		getNextPage();
		

	}

}

/*@ngInject*/
export function youtubeDataApiMockService($http) {

	const JSON_PATH = './mgla_six_results.json';
	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

		console.log('youtubeDataApiMockService.searchVideo()');


		$http.get(JSON_PATH, function success(data) {
			console.log('mock api, loaded data');
			console.log(data);
		}, function(err) {

		});
		

	}

}

if(YOUTUBE_DATA_API) {
	var youtubeDataApiServiceInstance = youtubeDataApiService;
} else {
	var youtubeDataApiServiceInstance = youtubeDataApiMockService;
}


export default angular.module('ytMusicPlayerApp.youtubeDataApiService', [])
.service('youtubeDataApiService', youtubeDataApiServiceInstance)
.name;


