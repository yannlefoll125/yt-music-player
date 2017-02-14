'use strict';

export default class AlbumModel {
	constructor() {
		this.title = 'default title';
		this.description = 'default description';
		this.trackList = [];
	}

	setTrackList(trackList) {
		this.trackList = trackList;
	}
}
