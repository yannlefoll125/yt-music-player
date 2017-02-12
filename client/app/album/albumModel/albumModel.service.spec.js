'use strict';

describe('Service: albumModel', function() {
  // load the service's module
  beforeEach(module('ytMusicPlayerApp.albumModel'));

  // instantiate service
  var albumModel;
  beforeEach(inject(function(_albumModel_) {
    albumModel = _albumModel_;
  }));

  it('should do something', function() {
    expect(!!albumModel).toBe(true);
  });
});
