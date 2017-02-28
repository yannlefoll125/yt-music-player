'use strict';

import MusicBrainzComponentModule from './musicBrainz.component';
import musicBrainzApiMock from '../musicBrainzApi/musicBrainzApi.mock';

describe('Component: MusicBrainzComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(MusicBrainzComponentModule));
  beforeEach(angular.mock.module(musicBrainzApiMock));

  var MusicBrainzComponent;
  var musicBrainzApi;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, _musicBrainzApi_) {
    musicBrainzApi = _musicBrainzApi_;
    MusicBrainzComponent = $componentController('musicBrainz', {
      musicBrainzApi
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
