'use strict';

import searchResultModelService from './searchResultModel.service';
import SearchResultModel from './SearchResultModel.class';

describe('Service: searchResultModel', function() {
  // load the service's module
  beforeEach(angular.mock.module(searchResultModelService));

  // instantiate service
  var searchResultModel;
  beforeEach(inject(function(_searchResultModel_) {
    searchResultModel = _searchResultModel_;
  }));

  it('should do something', function() {
    expect(!!searchResultModel).toBe(true);
  });


  describe('setVideoItemList', function(){
    var input, expected;
    it('should set this.videoItemList to an empty list when passed an empty list', function() {
      input = [];
      expected = [];

      searchResultModel.setVideoItemList(input);

      expect(searchResultModel.videoItemList).toEqual(expected);
    });

    it('should set this.videoItemList as a list of SearchResultModel when passed a list of youtube data API items of a search result', function() {
      input = [{
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
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/59sJvvK4MRMUVwJ-KE3RosAwu1s\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "0xjGmcFePl4"
        },
        "snippet": {
          "publishedAt": "2012-03-04T21:43:14.000Z",
          "channelId": "UCiiZoYEKif-uk81lzYN6w_g",
          "title": "Mgla - With Hearts Toward None I",
          "description": "Country of origin: Poland Location: Cracow Status: Active Year of creation: 2000 Genre: Black Metal Lyrical themes: Theistic Satanism, Self-Destruction Current ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0xjGmcFePl4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0xjGmcFePl4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0xjGmcFePl4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "mutilation6",
          "liveBroadcastContent": "none"
        }
      }];

      expected = [
      new SearchResultModel('Mgła - Groza [Full - HD]', '1. Groza I 0:00 2. Groza II 11:22 3. Groza III 18:38 4. Groza IV 26:25 More info/Buy: http://www.cfprod.com/nh/index6.php No copyright is intended. The rights to ...', '71zwQWWK24U'),
      new SearchResultModel('Mgla - With Hearts Toward None I', 'Country of origin: Poland Location: Cracow Status: Active Year of creation: 2000 Genre: Black Metal Lyrical themes: Theistic Satanism, Self-Destruction Current ...', '0xjGmcFePl4')
      ];

      searchResultModel.setVideoItemList(input);

      expect(searchResultModel.videoItemList).toEqual(expected);
    });

  });

  describe('getVideoById', function(){
    var input, output, expected;
    it('should return null when videoItemList is an empty list', function() {
      searchResultModel.videoItemList = [];
      input = 'videoId1';
      expected = null;

      output = searchResultModel.getVideoById(input);

      expect(output).toBe(expected);

    });

    it('should return null when there is no video with input videoId in videoItemList', function() {
      searchResultModel.videoItemList = [
        new SearchResultModel('title1', 'description1', 'videoId1'),
        new SearchResultModel('title2', 'description2', 'videoId2')
      ];
      input = 'videoId3';
      expected = null;

      output = searchResultModel.getVideoById(input);

      expect(output).toBe(expected);

    });

    it('should return a SearchResultModel with videoId == input when there is a video with input videoId in videoItemList', function() {
      searchResultModel.videoItemList = [
        new SearchResultModel('title1', 'description1', 'videoId1'),
        new SearchResultModel('title2', 'description2', 'videoId2')
      ];
      input = 'videoId2';
      expected = new SearchResultModel('title2', 'description2', 'videoId2');

      output = searchResultModel.getVideoById(input);

      expect(output).toEqual(expected);

    });

  });

  describe('addListener', function(){

  });

  describe('removeListener', function(){

  });

  describe('notifyListener', function(){

  });




});
