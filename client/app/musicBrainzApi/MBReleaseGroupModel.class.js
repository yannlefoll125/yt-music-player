'use strict';

export default class MBReleaseGroupModel {

	constructor(id, artist, title, type) {
		if(!!id && !!artist && !!title && !!type) {
			this.id = id; 
			this.artist = artist;
			this.title = title;
			this.type = type;
		}
	}

}