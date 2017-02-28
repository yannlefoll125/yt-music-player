'use strict';
const angular = require('angular');

import MBArtistModel from './MBArtistModel.class';
import MBReleaseGroupModel from './MBReleaseGroupModel.class';

/*@ngInject*/
export function musicBrainzApiService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	const MB_API_URL = 'http://musicbrainz.org/ws/2/';
	const MB_API_ARTIST_URL = MB_API_URL + 'artist';
	const MB_API_BROWSE_RELEASE_GROUP_URL = MB_API_URL + 'release-group*';

	this.searchArtist = function(query, callback) {


	}

	this.getReleaseGroupListByArtistId = function(id, artist, pageSize, pageOffset, callback) {
		

	}

}

export default angular.module('ytMusicPlayerApp.musicBrainzApiMock', [])
.service('musicBrainzApi', musicBrainzApiService)
.name;
