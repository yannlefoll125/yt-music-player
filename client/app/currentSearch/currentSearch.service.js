'use strict';
const angular = require('angular');

/*@ngInject*/
export function currentSearchService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('ytMusicPlayerApp.currentSearch', [])
  .service('currentSearch', currentSearchService)
  .name;
