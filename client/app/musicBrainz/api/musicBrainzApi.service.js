'use strict';
const angular = require('angular');

import MBArtistModel from '../model/MBArtistModel.class';
import MBReleaseGroupModel from '../model/MBReleaseGroupModel.class';

/*@ngInject*/
export function musicBrainzApiService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	const MB_API_URL = 'http://musicbrainz.org/ws/2/';
	const MB_API_ARTIST_URL = MB_API_URL + 'artist';
	const MB_API_BROWSE_RELEASE_GROUP_URL = MB_API_URL + 'release-group*';

	this.searchArtist = function(query, callback) {

		var params = {
			fmt: 'json',
			query: query
		};

		$http.get(MB_API_ARTIST_URL, { params: params }).then(function success(res) {

			if(res.headers('Content-Type') == 'text/html; charset=utf-8') {
				callback({status: 404});
				return;
			}

			var artistList = res.data.artists;

			var artistModelList = [];
			for(var artist of artistList) {
				artistModelList.push(new MBArtistModel(
					artist.id,
					artist.name,
					artist.country));
			}

			callback(false, artistModelList);


		}, function error(res) {
			var status;

			if(res.headers('status')) {
				status = res.headers('status');
			} else {
				status = -1;
			}
			callback({status: status});

		});

	}

	this.getReleaseGroupListByArtistId = function(id, artist, pageSize, pageOffset, callback) {
		var params = {
			fmt: 'json',
			artist: id,
			limit: pageSize,
			offset: pageOffset
		};

		$http.get(MB_API_BROWSE_RELEASE_GROUP_URL, {params: params}).then(function(res) {

			var releaseGroupList = res.data['release-groups'];

			var releaseGroupModelList = [];
			for(var r of releaseGroupList) {

				releaseGroupModelList.push(new MBReleaseGroupModel(r.id, artist, r.title, r["primary-type"]));

			}

			callback(false, releaseGroupModelList);

		}, function(res) {

		});

	}

}

export default angular.module('ytMusicPlayerApp.musicBrainzApi', [])
.service('musicBrainzApi', musicBrainzApiService)
.name;
