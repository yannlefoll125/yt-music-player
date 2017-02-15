'use strict';

export default class SearchResultModel {
	constructor(...args) {

		if(args.length == 1) {
			var apiSearchResult = args[0];
			this.title = apiSearchResult.snippet.title;
			this.description = apiSearchResult.snippet.description;
			this.videoId = apiSearchResult.id.videoId;
		} else if(args.length === 3) {
			this.setValues(...args);
		}

	}

	setValues(title, description, videoId) {
		this.title = title;
		this.description = description;
		this.videoId = videoId;
	}
}