'use strict';

import musicBrainzApiModule from './musicBrainzApi.service';
import MBArtistModel from './MBArtistModel.class';
import MBReleaseGroupModel from './MBReleaseGroupModel.class';

describe('Service: musicBrainzApi', function() {

  var mglaArtistModel = new MBArtistModel("e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd", "Mgła", "PL");

  const MB_API_URL = 'http://musicbrainz.org/ws/2/';

  

  // load the service's module
  beforeEach(angular.mock.module(musicBrainzApiModule));

  // instantiate service
  var musicBrainzApi;
  var $httpBackend;
  beforeEach(inject(function(_musicBrainzApi_, _$httpBackend_) {
    musicBrainzApi = _musicBrainzApi_;
    $httpBackend = _$httpBackend_;
  }));



  describe('searchArtist()', function() {

    var ctrl = {
      callback: function(err, result) {

      }
    }

    const MB_API_ARTIST_URL = MB_API_URL + 'artist*';
    const MB_API_ARTIST_URL_REGEXP = new RegExp(MB_API_ARTIST_URL);

    beforeEach(function() {
      spyOn(ctrl, 'callback');
    })

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return an empty list', function() {

      $httpBackend.expectGET(MB_API_ARTIST_URL_REGEXP).respond(function(method, url, data, headers, params) {
        expect(params.fmt).toBe('json');
        expect(params.query).toBeDefined();

        return [200,
        {
          "created": "2017-02-27T14:30:39.598Z",
          "count": 0,
          "offset": 0,
          "artists": []
        }   

        ];
      });


      musicBrainzApi.searchArtist('mgegdsfsdfsdfsla', ctrl.callback);
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(false, []);

    });

    it('should return a list of MBArtistModel with 1 element', function() {

      $httpBackend.expectGET(MB_API_ARTIST_URL_REGEXP).respond(function(method, url, data, headers, params) {
        expect(params.fmt).toBe('json');
        expect(params.query).toBeDefined();

        return [200,
        {
          "created": "2017-02-26T13:09:56.211Z",
          "count": 1,
          "offset": 0,
          "artists": [
          {
            "id": "e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd",
            "type": "Group",
            "score": "100",
            "name": "Mgła",
            "sort-name": "Mgla",
            "country": "PL",
            "area": {
              "id": "dd7f80c8-f017-3d01-8608-2a8c9c32b954",
              "name": "Poland",
              "sort-name": "Poland"
            },
            "begin-area": {
              "id": "e82975d0-7258-4e4c-9c56-6e1deea8ad4c",
              "name": "Kraków",
              "sort-name": "Kraków"
            },
            "life-span": {
              "begin": "2000",
              "ended": null
            },
            "aliases": [
            {
              "sort-name": "MG£A",
              "name": "MG£A",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            },
            {
              "sort-name": "Mgla",
              "name": "Mgla",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            }
            ],
            "tags": [
            {
              "count": 2,
              "name": "metal"
            },
            {
              "count": 5,
              "name": "black metal"
            },
            {
              "count": 0,
              "name": "mgla"
            }
            ]
          }
          ]
        }        

        ];
      });


      musicBrainzApi.searchArtist('mgla', ctrl.callback);
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(false, [mglaArtistModel]);

    });

    it('should return a list of MBArtistModel with 2 elements', function() {

      $httpBackend.expectGET(MB_API_ARTIST_URL_REGEXP).respond(function(method, url, data, headers, params) {
        expect(params.fmt).toBe('json');
        expect(params.query).toBeDefined();

        return [200,
        {
          "created": "2017-02-26T13:09:56.211Z",
          "count": 1,
          "offset": 0,
          "artists": [
          {
            "id": "e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd",
            "type": "Group",
            "score": "100",
            "name": "Mgła",
            "sort-name": "Mgla",
            "country": "PL",
            "area": {
              "id": "dd7f80c8-f017-3d01-8608-2a8c9c32b954",
              "name": "Poland",
              "sort-name": "Poland"
            },
            "begin-area": {
              "id": "e82975d0-7258-4e4c-9c56-6e1deea8ad4c",
              "name": "Kraków",
              "sort-name": "Kraków"
            },
            "life-span": {
              "begin": "2000",
              "ended": null
            },
            "aliases": [
            {
              "sort-name": "MG£A",
              "name": "MG£A",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            },
            {
              "sort-name": "Mgla",
              "name": "Mgla",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            }
            ],
            "tags": [
            {
              "count": 2,
              "name": "metal"
            },
            {
              "count": 5,
              "name": "black metal"
            },
            {
              "count": 0,
              "name": "mgla"
            }
            ]
          },{
            "id": "e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd",
            "type": "Group",
            "score": "100",
            "name": "Mgła",
            "sort-name": "Mgla",
            "country": "PL",
            "area": {
              "id": "dd7f80c8-f017-3d01-8608-2a8c9c32b954",
              "name": "Poland",
              "sort-name": "Poland"
            },
            "begin-area": {
              "id": "e82975d0-7258-4e4c-9c56-6e1deea8ad4c",
              "name": "Kraków",
              "sort-name": "Kraków"
            },
            "life-span": {
              "begin": "2000",
              "ended": null
            },
            "aliases": [
            {
              "sort-name": "MG£A",
              "name": "MG£A",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            },
            {
              "sort-name": "Mgla",
              "name": "Mgla",
              "locale": null,
              "type": null,
              "primary": null,
              "begin-date": null,
              "end-date": null
            }
            ],
            "tags": [
            {
              "count": 2,
              "name": "metal"
            },
            {
              "count": 5,
              "name": "black metal"
            },
            {
              "count": 0,
              "name": "mgla"
            }
            ]
          }
          ]
        }        

        ];
      });


      musicBrainzApi.searchArtist('mgla', ctrl.callback);
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith(false, [mglaArtistModel, mglaArtistModel]);

    });

    it('should return a 404 error when the API returns a html page (the 404 not found page)', function() {

      $httpBackend.expectGET(MB_API_ARTIST_URL_REGEXP).respond(function(method, url, data, headers, params) {
        expect(params.fmt).toBe('json');
        expect(params.query).toBeDefined();

        return [200,
        {},
        {
          'Content-Type': 'text/html; charset=utf-8'
        }        

        ];
      });


      musicBrainzApi.searchArtist('mgla', ctrl.callback);
      $httpBackend.flush();

      expect(ctrl.callback).toHaveBeenCalledWith({status: 404});

    });
  });

describe('getReleaseGroupListByArtistId(id, artist, pageSize, pageOffset, callback)', function() {
  var ctrl = {
    callback: function(err, data) {

    }
  }

  beforeEach(function() {
    spyOn(ctrl, 'callback');
  })

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  const MB_API_BROWSE_RELEASE_GROUP_URL = MB_API_URL + 'release-group*';
  const MB_API_BROWSE_RELEASE_GROUP_URL_REGEXP = new RegExp(MB_API_BROWSE_RELEASE_GROUP_URL);

  var artistId = "e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd";
  var artist = 'Mgla';

  var mbReleaseGroupModel = new MBReleaseGroupModel("0231a9bb-3934-3727-98f2-542066f55c38", artist, "Crushing the Holy Trinity", 'Album');

  it('should return a list with 1 MBReleaseGroupModel', function() {

    var pageSize = 5;
    var pageOffset = 0;

    var expectedData = [mbReleaseGroupModel];

    $httpBackend.expectGET(MB_API_BROWSE_RELEASE_GROUP_URL_REGEXP).respond(function(method, url, data, headers, params) {
      var expectedParams = {
        fmt: 'json',
        artist: artistId,
        limit: pageSize,
        offset: pageOffset
      };

      expect(params.fmt).toEqual(expectedParams.fmt);
      expect(params.artist).toEqual(expectedParams.artist);
      expect(params.limit).toEqual(expectedParams.limit + '');
      expect(params.offset).toEqual(expectedParams.offset + '');

      return [200,
      {
        "release-groups": [
        {
          "first-release-date": "2005-07-11",
          "title": "Crushing the Holy Trinity",
          "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
          "id": "0231a9bb-3934-3727-98f2-542066f55c38",
          "secondary-type-ids": [],
          "secondary-types": [],
          "primary-type": "Album",
          "disambiguation": ""
        }
        ],
        "release-group-offset": 0,
        "release-group-count": 1
      }
      ]
      
    });

    musicBrainzApi.getReleaseGroupListByArtistId(artistId, artist, pageSize, pageOffset, ctrl.callback);
    $httpBackend.flush();

    expect(ctrl.callback).toHaveBeenCalledWith(false, expectedData);

  });




});
});
