'use strict';
const angular = require('angular');

class AlbumModel {
	constructor() {
		this.title = 'default title';
		this.description = 'default description';
		this.trackList = [];
	}

	setTrackList(trackList) {
		this.trackList = trackList;
	}
}

class TrackModel {
	constructor(num, title, start) {
		this.num = num;
		this.title = title;
		this.start = start;
	}

	setLength(length) {
		this.length = length;
	}
}

/*@ngInject*/
export function albumModelService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.model = new AlbumModel();

	this.controllerCallback = null;


	this.setAlbumModelValues = function(title, description) {
		this.model.title = title;
		this.model.description = description;
		this.notifyController('model-update');
	}

	this.setAlbumModelValuesFromApiResult = function(apiResult) {
		this.model.title = apiResult.snippet.title;
		this.model.description = apiResult.snippet.description;
		this.model.thumbnails = {default: apiResult.snippet.thumbnails.default};

		this.model.setTrackList(this.parseTrackList(this.model.description));

		console.log(this.model);

		this.notifyController('model-update');
	}

	this.setControllerCallback = function(callback) {
		this.controllerCallback = callback;
	}

	this.notifyController = function(event) {
		this.controllerCallback(event);
	}

	this.parseTrackList = function(text) {
		const timeRegexp = /\d{1,2}:\d{2}/;
		const numRegexp = /^\d+/;

		var lines = text.split('\n');


		var trackList = [];

		for(var line of lines) {
			var timeResults = line.match(timeRegexp);
			var numResults = line.match(numRegexp);


			if(numResults) {
				var num = numResults[0];
				line = line.split(num).join('');
			}

			if(timeResults) {
				var time = timeResults[0];
				line = line.split(time).join('');
				time = time.split(':');
				var timeSeconds = 60 * parseInt(time[0]) + parseInt(time[1]);

				trackList.push({
					title: line,
					time: timeSeconds
				});

			}

		}

		var sortedTrackList = trackList.sort((a, b) => {
			if(a.time > b.time) {
				return 1;
			} else if(a.time == b.time) {
				return 0;
			} else {
				return -1;
			}
		});

		const trackNumber = sortedTrackList.length;

		var trackNum = 1;
		var trackModelList = []
		var previousTrack = null;
		for(var t of sortedTrackList) {
			if(previousTrack) {
				previousTrack.setLength(t.time - previousTrack.start);
			}
			previousTrack = new TrackModel(trackNum, t.title, t.time);
			trackModelList.push(previousTrack);
			trackNum++;
		}

		return trackModelList;
	} 

}

export default angular.module('ytMusicPlayerApp.albumModel', [])
.service('albumModel', albumModelService)
.name;
