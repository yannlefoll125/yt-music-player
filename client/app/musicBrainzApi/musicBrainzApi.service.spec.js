'use strict';

import musicBrainzApiModule from './musicBrainzApi.service';
import MBArtistModel from './MBArtistModel.class';

describe('Service: musicBrainzApi', function() {

  var mglaArtistModel = new MBArtistModel("e7b4c928-8c45-4ecf-9f08-da64fe5c2ddd", "Mgła", "PL");

  const MB_API_URL = 'http://musicbrainz.org/ws/2/';

  var ctrl = {
    callback: function(err, result) {

    }
  }

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
});
