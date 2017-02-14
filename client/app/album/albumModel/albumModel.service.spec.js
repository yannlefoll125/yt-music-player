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

    var expected = [
    new TrackModel(1, 'Exercises in futility I', 0, 478),
    new TrackModel(2, 'Exercises in futility II', 478, 469),
    new TrackModel(3, 'Exercises in futility III', 947)
    ];

    it('should parse [no track number, title, MM:SS]', function() {

      var input = `
      Exercises in futility I 00:00
      Exercises in futility II 07:58
      Exercises in futility III 15:47
      `;

      var output = albumModel.parseTrackList(input);

      expect(output).toEqual(expected);
    });
  });
  
});
8