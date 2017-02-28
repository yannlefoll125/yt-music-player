'use strict';

export default class TrackModel {
	constructor(num, title, start, length=null) {
		this.num = num;
		this.title = title.trim();
		this.start = start;

		if(length) {
			this.length = length;
		}
	}

	setLength(length) {
		this.length = length;
	}

}