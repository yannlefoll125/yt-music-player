'use strict';

import musicBrainzModelModule from './musicBrainzModel.service';
import musicBrainzApiMock from '../api/musicBrainzApi.mock';

describe('Service: musicBrainzModel', function() {
  // load the service's module
  beforeEach(angular.mock.module(musicBrainzModelModule));
  beforeEach(angular.mock.module(musicBrainzApiMock));

  // instantiate service
  var musicBrainzModel;

  beforeEach(inject(function(_musicBrainzModel_, _musicBrainzApi_) {
    musicBrainzModel = _musicBrainzModel_;
    musicBrainzModel.musicBrainzApi = _musicBrainzApi_;
  }));

  it('should do something', function() {
    expect(!!musicBrainzModel).toBe(true);
  });

  
});
