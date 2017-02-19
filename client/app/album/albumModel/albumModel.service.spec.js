'use strict';

import albumModelService from './albumModel.service';
import TrackModel from './TrackModel.class';
import AlbumModel from './AlbumModel.class';

describe('Service: albumModel', function() {

  // load the service's module
  beforeEach(angular.mock.module(albumModelService));

  var controllerMock = {
    callback: function(event) {

    }
  }
  

  // instantiate service
  var albumModel;
  beforeEach(inject(function(_albumModel_) {
    albumModel = _albumModel_;
    albumModel.controllerCallback = controllerMock.callback;
  }));

  it('service should be injected', function() {
    expect(!!albumModel).toBe(true);
  });

  beforeAll(function() {
    spyOn(controllerMock, 'callback');
  });

  describe('notifyController', function() {
    it('should call controllerCallback', function() {
      albumModel.notifyController('eventName');
      expect(controllerMock.callback).toHaveBeenCalledWith('eventName');
    })
  })
  

  describe('set this.model attributes', function(){

    beforeEach(function() {
      albumModel.model = new AlbumModel();
    })

    it('should initialize model with title: "test title" and description: "test description"', function() {
      var title = 'test title';
      var description = 'test description';
      albumModel.setAlbumModelValues(title, description);

      expect(albumModel.model.title).toBe(title);
      expect(albumModel.model.description).toBe(description);

      expect(controllerMock.callback).toHaveBeenCalled();
    });

    it('should initialize model with from an api result (youtube data API video item)', function() {

      var apiResult = {
        "kind": "youtube#video",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/cXq8QP5yZACKPtJsmodoPZBzkfw\"",
        "id": "71zwQWWK24U",
        "snippet": {
          "publishedAt": "2012-08-22T09:43:11.000Z",
          "channelId": "UCYaYZQE2pymOZ0k3iaRdgcw",
          "title": "Mgła - Groza [Full - HD]",
          "description": "1. Groza I 0:00\r\n2. Groza II 11:22\r\n3. Groza III 18:38\r\n4. Groza IV 26:25\r\n\r\nMore info/Buy: http://www.cfprod.com/nh/index6.php\r\n\r\nNo copyright is intended. The rights to this video are assumed by the owner and its affiliates.",
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
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/71zwQWWK24U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/71zwQWWK24U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "OdiumNostrum",
          "tags": [
          "mgla"
          ],
          "categoryId": "10",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Mgła - Groza [Full - HD]",
            "description": "1. Groza I 0:00\r\n2. Groza II 11:22\r\n3. Groza III 18:38\r\n4. Groza IV 26:25\r\n\r\nMore info/Buy: http://www.cfprod.com/nh/index6.php\r\n\r\nNo copyright is intended. The rights to this video are assumed by the owner and its affiliates."
          }
        }
      };

      albumModel.setAlbumModelValuesFromApiResult(apiResult);

      expect(albumModel.model.title).toBe("Mgła - Groza [Full - HD]");
      expect(albumModel.model.description).toBe("1. Groza I 0:00\r\n2. Groza II 11:22\r\n3. Groza III 18:38\r\n4. Groza IV 26:25\r\n\r\nMore info/Buy: http://www.cfprod.com/nh/index6.php\r\n\r\nNo copyright is intended. The rights to this video are assumed by the owner and its affiliates.");
      expect(albumModel.model.thumbnails).toEqual({"default": {
        "url": "https://i.ytimg.com/vi/71zwQWWK24U/default.jpg",
        "width": 120,
        "height": 90
      }});

      expect(albumModel.model.trackList.length).toBe(4);

      expect(controllerMock.callback).toHaveBeenCalled();
    });


    
  });

  describe('parseTrackList EIF I->III with start, no album length', function() {

    jasmine.pp = function(obj) {
      return JSON.stringify(obj, undefined, 2);
    }

    var expected = [
    new TrackModel(1, 'Exercises in futility I', 0, 478),
    new TrackModel(2, 'Exercises in futility II', 478, 469),
    new TrackModel(3, 'Exercises in futility III', 947)
    ];

    it('should parse [{title} {MM:SS}]', function() {

      var input = `
      Exercises in futility I 00:00
      Exercises in futility II 07:58
      Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{N} {title} {MM:SS}]', function() {

      var input = `
      1 Exercises in futility I 00:00
      2 Exercises in futility II 07:58
      3 Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{NN} {title} {MM:SS}]', function() {

      var input = `
      01 Exercises in futility I 00:00
      02 Exercises in futility II 07:58
      03 Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{NN} {title} {MM:SS}] unordered (1 3 2)', function() {

      var input = `
      01 Exercises in futility I 00:00
      03 Exercises in futility III 15:47
      02 Exercises in futility II 07:58
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{NN} {title} {MM:SS}] unordered (3 2 1)', function() {

      var input = `
      03 Exercises in futility III 15:47
      02 Exercises in futility II 07:58
      01 Exercises in futility I 00:00
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{title} {MM:SS}] with rest of description', function() {

      var input = `
      Third full-length album of Mgła, available at :

      http://www.no-solace.com
      http://www.northern-heritage.net



      Exercises in futility I 00:00
      Exercises in futility II 07:58
      Exercises in futility III 15:47

      http://www.facebook.com/mglaofficial

      Lyrics: http://www.no-solace.com/eif.html



      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{N}. {title} {MM:SS}]', function() {

      var input = `
      1. Exercises in futility I 00:00
      2. Exercises in futility II 07:58
      3. Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{NN}. {title} {MM:SS}]', function() {

      var input = `
      01. Exercises in futility I 00:00
      02. Exercises in futility II 07:58
      03. Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{MM:SS} {title}]', function() {

      var input = `
      00:00 Exercises in futility I
      07:58 Exercises in futility II 
      15:47 Exercises in futility III 
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{MM:SS} - {title}]', function() {

      var input = `
      00:00 - Exercises in futility I
      07:58 - Exercises in futility II 
      15:47 - Exercises in futility III 
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

    it('should parse [{N} - {title} {(MM:SS)}]', function() {

      var input = `
      1 - Exercises in futility I (00:00)
      2 - Exercises in futility II (07:58)
      3 - Exercises in futility III (15:47)
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });

  });
  
});
