'use strict';

export default class MBReleaseGroupModel {

	constructor(id, artist, title) {
		if(!!id && !!artist && !!title) {
			this.id = id; 
			this.artist = artist;
			this.title = title;
		}
	}

}