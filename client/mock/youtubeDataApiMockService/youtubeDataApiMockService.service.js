'use strict';
const angular = require('angular');


/*@ngInject*/
export function youtubeDataApiMockService($http) {
	const DEFAULT_RES_NUMBER = 10;
	const JSON_PATH = '/mgla_six_results.json';

	const LOCAL_API_URI = '/api/locals'
	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

		console.log('youtubeDataApiMockService.searchVideo()');


		$http.get(LOCAL_API_URI + '/mgla_six_results').then(function(res) {

			callback(false, res.data);
		}, function(res) {

		})
		

	}

}

export default angular.module('ytMusicPlayerApp.youtubeDataApiMockService', [])
.service('youtubeDataApiService', youtubeDataApiMockService)
.name;
