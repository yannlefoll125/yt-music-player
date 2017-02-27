'use strict';

export default class MBArtistModel {

	constructor(id, name, country) {
		if(!!id && !!name && !!country) {
			this.id = id; 
			this.name = name;
			this.country = country;
		}
	}

}