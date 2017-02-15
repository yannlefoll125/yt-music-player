'use strict';

import SearchResultModel from './SearchResultModel.class';

describe('Class: SearchResultModel', function() {

	it('should instantiate a SearchResultModel with no attributes', function() {
		var instance = new SearchResultModel();

		expect(instance).toBeDefined();

	});

	it('should instantiate a SearchResultModel by passing title, description and videoId', function() {
		var instance = new SearchResultModel('title', 'description', 'videoId');

		expect(instance).toBeDefined();
		expect(instance.title).toBe('title');
		expect(instance.description).toBe('description');
		expect(instance.videoId).toBe('videoId');

	});

	it('should instantiate a SearchResultModel by passing a youtube data API search result item', function() {

		var searchResultItem = {
			"kind": "youtube#searchResult",
			"etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/NN2AFS2SAiv8T1c5FF2g9ZWHlMk\"",
			"id": {
				"kind": "youtube#video",
				"videoId": "71zwQWWK24U"
			},
			"snippet": {
				"publishedAt": "2012-08-22T09:43:11.000Z",
				"channelId": "UCYaYZQE2pymOZ0k3iaRdgcw",
				"title": "Mgła - Groza [Full - HD]",
				"description": "1. Groza I 0:00 2. Groza II 11:22 3. Groza III 18:38 4. Groza IV 26:25 More info/Buy: http://www.cfprod.com/nh/index6.php No copyright is intended. The rights to ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/71zwQWWK24U/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/71zwQWWK24U/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/71zwQWWK24U/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "OdiumNostrum",
				"liveBroadcastContent": "none"
			}
		};

		var instance = new SearchResultModel(searchResultItem);

		expect(instance).toBeDefined();
		expect(instance.title).toBe('Mgła - Groza [Full - HD]');
		expect(instance.description).toBe('1. Groza I 0:00 2. Groza II 11:22 3. Groza III 18:38 4. Groza IV 26:25 More info/Buy: http://www.cfprod.com/nh/index6.php No copyright is intended. The rights to ...');
		expect(instance.videoId).toBe('71zwQWWK24U');

	});
})