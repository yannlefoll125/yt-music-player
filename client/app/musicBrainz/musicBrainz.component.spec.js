'use strict';

import MusicBrainzComponentModule from './musicBrainz.component';
import musicBrainzModelMock from './model/musicBrainzModel.mock';

describe('Component: MusicBrainzComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(MusicBrainzComponentModule));
  beforeEach(angular.mock.module(musicBrainzModelMock));

  var MusicBrainzComponent;
  var musicBrainzModel;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, _musicBrainzModel_) {
    musicBrainzModel = _musicBrainzModel_;
    MusicBrainzComponent = $componentController('musicBrainz', {
      musicBrainzModel
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
