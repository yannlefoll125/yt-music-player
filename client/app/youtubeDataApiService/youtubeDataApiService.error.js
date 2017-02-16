'use strict';
/*
export default class YoutubeDataApiServiceError {

	constructor(errorCode, errorName, message) {
		this.errorCode = errorCode;
		this.errorName = errorName;
		this.message = message;
	}

	toString() {
		return 'YoutubeDataApiServiceError \'' + this.errorName + '\' (' + this.errorCode + '): ' + this.message;
	}
}

export const VIDEO_NOT_FOUND = new YoutubeDataApiServiceError(1404, 'VIDEO_NOT_FOUND', 'The requested video could not be found');
export const BAD_REQUEST = new YoutubeDataApiServiceError(404, 'BAD_REQUEST', 'Bad request, resource not found');

*/

export default {
	VIDEO_NOT_FOUND: 1,
	API_ERROR: 2,

	properties: {
		1: {errorCode: 1404, errorName: 'VIDEO_NOT_FOUND', message: 'The requested video could not be found', info: {}},
		2: {errorCode: 404, errorName: 'API_ERROR', message: 'api error', info: {}}
	}
}