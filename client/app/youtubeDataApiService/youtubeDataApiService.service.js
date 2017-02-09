'use strict';
const angular = require('angular');

/*@ngInject*/
export function youtubeDataApiServiceService($http) {
	const API_KEY = "AIzaSyBDSw_0thz4nBujrwcHmiwcRimRT_AmuG0";
	const API_URL = "https://www.googleapis.com/youtube/v3";



	// AngularJS will instantiate a singleton by calling "new" on this function
	this.searchVideo = function(query, callback) {
		var params = {
			key: API_KEY,
			part: "snippet",
			q: query.toString(),
			type: "video"
		};


		var url = API_URL + '/search';

		$http.get(url, {params: params}).then(function success(res) {
			callback(false, res.data);
		}, function error(res) {
			console.error(res);
		});
	}

}

export default angular.module('ytMusicPlayerApp.youtubeDataApiService', [])
  .service('youtubeDataApiService', youtubeDataApiServiceService)
  .name;
