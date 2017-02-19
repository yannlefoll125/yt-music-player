'use strict';

import youtubeDataApiServiceModule from './youtubeDataApiService.service';
import YoutubeDataApiServiceError from './youtubeDataApiService.error';

describe('Service: youtubeDataApiService', function() {
  // load the service's module
  beforeEach(angular.mock.module(youtubeDataApiServiceModule));

  const API_URL = "https://www.googleapis.com/youtube/v3";

  // instantiate service
  var youtubeDataApiService;
  var $httpBackend;
  beforeEach(inject(function(_$httpBackend_, _youtubeDataApiService_) {
    $httpBackend = _$httpBackend_;
    youtubeDataApiService = _youtubeDataApiService_;
  }));

  it('should do something', function() {
    expect(!!youtubeDataApiService).toBe(true);
  });

  var ctrl = {
    callback: function(err, data) {

    }
  }

  beforeAll(function() {
    spyOn(ctrl, 'callback');
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })

  describe('searchVideo', function() {
    it('should return 0 results', function() {
      $httpBackend.expectGET(/https:\/\/www\.googleapis\.com\/youtube\/v3\/search.*/).respond(function(method, url, data, headers, params) {

        expect(params.key).toBeDefined();
        expect(params.part).toBe('snippet');
        expect(params.q).toBe('verisakeet full album');
        expect(params.type).toBe('video');

        return [ 200,
        {
          "kind": "youtube#searchListResponse",
          "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/wCtX59ZyZP13b1ljbBQU1vx6Bb8\"",
          "regionCode": "FR",
          "pageInfo": {
            "totalResults": 0,
            "resultsPerPage": 5
          },
          "items": []
        }
        ];
      });

      youtubeDataApiService.searchVideo('verisakeet', ctrl.callback);    
      $httpBackend.flush();  
      expect(ctrl.callback).toHaveBeenCalledWith(false, []);

    });

    /*it('should return N results when N == page_size', function() {

    });*/


  });

  describe('getVideoDetail', function() {

    const VIDEO_URL = API_URL + '/videos';
    var videoId = 'videoId';



    it('should call /videos with an existing id, and call the controller callback with a single video result item', function() {

      var res = {
        items: [
        {
          videoId: 'videoId',
          description: 'description'
        }
        ]
      };

      var expectedCallbackData = {
        videoId: 'videoId',
        description: 'description'
      };


      var urlPattern = VIDEO_URL + '\?key=(.+)&part=(.+)&id=(.+)';

      //urlPattern = VIDEO_URL + '.*';
      var urlRegex = new RegExp(urlPattern);

      $httpBackend.expectGET(/https:\/\/www\.googleapis\.com\/youtube\/v3\/videos.*/).respond(function(method, url, data, headers, params) {
        expect(params.key).toBeDefined();
        expect(params.part).toBe('snippet');
        expect(params.id).toBe(videoId);

        //Check that there are no other params
        expect(Object.keys(params).length).toBe(3); 

        return [200, res];
      });

      youtubeDataApiService.getVideoDetail(videoId, ctrl.callback);

      //Backend: Respond to the get request sent in getVideoDetail.
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(false, expectedCallbackData);

    });

    it('should call /videos with an inexisting id, and call the controller callback with a YoutubeDataApiServiceError.VIDEO_NOT_FOUND', function() {

      var res = {
        "kind": "youtube#videoListResponse",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/Rk41fm-2TD0VG1yv0-bkUvcBi9s\"",
        "pageInfo": {
          "totalResults": 0,
          "resultsPerPage": 0
        },
        "items": []
      };

      var expectedError = YoutubeDataApiServiceError.VIDEO_NOT_FOUND;


      var urlPattern = VIDEO_URL + '\?key=(.+)&part=(.+)&id=(.+)';

      //urlPattern = VIDEO_URL + '.*';
      var urlRegex = new RegExp(urlPattern);

      $httpBackend.expectGET(/https:\/\/www\.googleapis\.com\/youtube\/v3\/videos.*/).respond(function(method, url, data, headers, params) {
        expect(params.key).toBeDefined();
        expect(params.part).toBe('snippet');
        expect(params.id).toBe(videoId);

        //Check that there are no other params
        expect(Object.keys(params).length).toBe(3); 

        return [200, res];
      });

      youtubeDataApiService.getVideoDetail(videoId, ctrl.callback);

      //Backend: Respond to the get request sent in getVideoDetail.
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(expectedError);

    });

    it('should call the controller callback with a YoutubeDataApiServiceError.API_ERROR when there is an error', function() {

      var res = {};

      var expectedError = YoutubeDataApiServiceError.API_ERROR;


      var urlPattern = VIDEO_URL + '\?key=(.+)&part=(.+)&id=(.+)';

      //urlPattern = VIDEO_URL + '.*';
      var urlRegex = new RegExp(urlPattern);

      $httpBackend.expectGET(/https:\/\/www\.googleapis\.com\/youtube\/v3\/videos.*/).respond(function(method, url, data, headers, params) {
        expect(params.key).toBeDefined();
        expect(params.part).toBe('snippet');
        expect(params.id).toBe(videoId);

        //Check that there are no other params
        expect(Object.keys(params).length).toBe(3); 

        return [404, res];
      });

      youtubeDataApiService.getVideoDetail(videoId, ctrl.callback);

      //Backend: Respond to the get request sent in getVideoDetail.
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(expectedError);

    });

  });

});
