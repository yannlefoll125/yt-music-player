'use strict';
const angular = require('angular');

import TrackModel from './TrackModel.class';
import AlbumModel from './AlbumModel.class';
import PlayerStates from './PlayerStates.enum';

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

		this.notifyController('model-update');
	}

	this.setControllerCallback = function(callback) {
		this.controllerCallback = callback;
	}

	this.notifyController = function(event) {
		this.controllerCallback(event);
	}

	//Player logic
	this.playerState = PlayerStates.STOPPED;
	this.currentTrack = this.model.trackList[0];

	this.play = function(callback) {
		if(this.playerState == PlayerStates.PAUSED || this.playerState == PlayerStates.STOPPED) {
			this.playerState = PlayerStates.PLAYING;

			callback(this.currentTrack.num);
		} else {
			console.log('already playing');
			return;
		}
	}

	/**
		Takes a multiline text and returns a list of TrackViewModel if it finds track info
	*/
	this.parseTrackList = function(/** string */ text, /** number */ albumLength=null) {
		const timeRegexp = /\(?(\d{1,2}:\d{2})\)?/;
		const numRegexp = /^(\d+)(\s?-\s?|[\s\.])/;
		const titleStartStripRegexp = /^[\s-]*/;
		const titleEndStripRegexp = /[\s-]*$/;

		var lines = text.split('\n');

		var trackList = [];

		for(var line of lines) {
			//Remove start and trailing spaces
			line = line.trim();

			//look for start times
			var timeResults = line.match(timeRegexp);

			//Look to track number
			var numResults = line.match(numRegexp);
			
			if(numResults) {
				//The first element of the result array is the raw regexp match
				//It will be striped from the line
				var numStringToRemove = numResults[0];

				//First group match: represents the number (should only represent a number)
				var num = numResults[1];

				line = line.replace(numStringToRemove, '');
			}
			
			//The line is considered to represent a track only if we can find a MM:SS start timer
			if(timeResults) {

				var timeStringToRemove = timeResults[0];
				var time = timeResults[1];

				//Remove the timer string
				line = line.replace(timeStringToRemove, '');

				//Remove start and trailing symboles (spaces, dash etc, see titleStartStripRegexp)
				line = line.replace(titleStartStripRegexp, '');
				line = line.replace(titleEndStripRegexp, '');

				//Convert start timer in seconds
				time = time.split(':');
				var timeSeconds = 60 * parseInt(time[0]) + parseInt(time[1]);

				//add track to temp track list
				trackList.push({
					title: line,
					time: timeSeconds
				});

			}
		}

		//Sort track list according to ascending start timer
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

		//Now that tracks are sorted, create a list of TrackViewModel
		//At each iteration, calculate the previous track length using
		//the current track start time and the previous track start time
		for(var t of sortedTrackList) {
			if(previousTrack) {
				previousTrack.setLength(t.time - previousTrack.start);
			}
			previousTrack = new TrackModel(trackNum, t.title, t.time);
			trackModelList.push(previousTrack);
			trackNum++;
		}

		//If given as parameter, use the album length to calculate the last track length
		if(albumLength) {
			var lastTrack = trackModelList[trackModelList.length-1];
			lastTrack.setLength(albumLength - lastTrack.start);
		}

		return trackModelList;
	} 

}

export default angular.module('ytMusicPlayerApp.albumModel', [])
.service('albumModel', albumModelService)
.name;
