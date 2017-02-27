'use strict';

export default class MBReleaseGroupModel {

	constructor(id, title, dateString) {
		if(!!id && !!title && !!dateString) {
			this.id = id; 
			this.title = title;
			this.dateString = dateString;
		}
	}

}