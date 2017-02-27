'use strict';

import musicBrainzApi from './musicBrainzApi.service';

xdescribe('Service: musicBrainzApi', function() {
  // load the service's module
  beforeEach(angular.mock.module(musicBrainzApi));

  // instantiate service
  var musicBrainzApi;
  beforeEach(inject(function(_musicBrainzApi_) {
    musicBrainzApi = _musicBrainzApi_;
  }));

  it('should do something', function() {
    expect(!!musicBrainzApi).toBe(true);
  });
});
