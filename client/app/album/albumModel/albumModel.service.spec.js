'use strict';

import albumModelService from './albumModel.service';
import TrackModel from './TrackModel.class';

describe('Service: albumModel', function() {
  // load the service's module
  beforeEach(angular.mock.module(albumModelService));

  // instantiate service
  var albumModel;
  beforeEach(inject(function(_albumModel_) {
    albumModel = _albumModel_;
  }));

  it('should do something', function() {
    expect(!!albumModel).toBe(true);
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

  });
  
});
8