'use strict';

import musicBrainzModelModule from './musicBrainzModel.service';

describe('Service: musicBrainzModel', function() {
  // load the service's module
  beforeEach(angular.mock.module(musicBrainzModelModule));

  // instantiate service
  var musicBrainzModel;
  beforeEach(inject(function(_musicBrainzModel_) {
    musicBrainzModel = _musicBrainzModel_;
  }));

  it('should do something', function() {
    expect(!!musicBrainzModel).toBe(true);
  });
});
