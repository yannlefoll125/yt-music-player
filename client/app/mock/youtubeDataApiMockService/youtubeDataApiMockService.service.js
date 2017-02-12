'use strict';
const angular = require('angular');
const mgla_six_results = require('mgla_six_results');

/*@ngInject*/
export function youtubeDataApiMockService($http) {
	const DEFAULT_RES_NUMBER = 10;
	const JSON_PATH = '/mgla_six_results.json';
	this.searchVideo = function(query, callback, resNumber=DEFAULT_RES_NUMBER) {

		console.log('youtubeDataApiMockService.searchVideo()');

		console.log(mgla_six_results.itemList);

		/*$http.get(JSON_PATH).then(function success(data) {
			console.log('mock api, loaded data');
			console.log(data);
		}, function(err) {
			console.error('mock api, error');

		});*/
		

	}

}

export default angular.module('ytMusicPlayerApp.youtubeDataApiMockService', [])
.service('youtubeDataApiService', youtubeDataApiMockService)
.name;
