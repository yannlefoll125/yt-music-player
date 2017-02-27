'use strict';
const angular = require('angular');

/*@ngInject*/
export function musicBrainzApiService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('ytMusicPlayerApp.musicBrainzApi', [])
  .service('musicBrainzApi', musicBrainzApiService)
  .name;
