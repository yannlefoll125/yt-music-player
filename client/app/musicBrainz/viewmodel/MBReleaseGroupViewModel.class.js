'use strict';

import MBReleaseGroupModel from '../musicBrainzApi/MBReleaseGroupModel.class';

export default class MBReleaseGroupViewModel {

	constructor(...args) {

		if(args.length == 1) {
			this.id = args[0].id; 
			this.artist = args[0].artist;
			this.title = args[0].title;
			this.type = args[0].type;

		} else if(args.length == 4) {

			if(!!args[0] && !!args[1] && !!args[2] && !!args[3]) {
				this.id = args[0]; 
				this.artist = args[1];
				this.title = args[2];
				this.type = args[3];
			}
		}

		
	}

}