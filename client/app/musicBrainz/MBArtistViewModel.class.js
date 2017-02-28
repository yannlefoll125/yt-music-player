'use strict';

export default class MBArtistViewModel {

	constructor(...args) {

		if(args.length == 1) {
			this.id = args[0].id; 
			this.name = args[0].name;
			this.country = args[0].country;
		} else if (args.length ==3) {
			if(!!args[0] && !!args[1] && !!args[2]) {
				this.id = args[0]; 
				this.name = args[1];
				this.country = args[2];
			}
		}
	}

}