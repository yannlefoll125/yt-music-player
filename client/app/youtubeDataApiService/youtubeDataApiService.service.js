'use strict';
const angular = require('angular');

/*@ngInject*/
export function youtubeDataApiService($http) {
	const API_KEY = "AIzaSyBDSw_0thz4nBujrwcHmiwcRimRT_AmuG0";
	const API_URL = "https://www.googleapis.com/youtube/v3";
	const DEFAULT_RES_NUMBER = 10;

	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

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

export default angular.module('ytMusicPlayerApp.youtubeDataApiService', [])
.service('youtubeDataApiService', youtubeDataApiService)
.name;
