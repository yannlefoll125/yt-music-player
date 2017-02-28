'use strict';
const angular = require('angular');

/*@ngInject*/
export function musicBrainzModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('ytMusicPlayerApp.musicBrainzModelMock', [])
  .service('musicBrainzModel', musicBrainzModelService)
  .name;
