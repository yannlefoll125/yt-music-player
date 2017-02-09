'use strict';

describe('Service: youtubeDataApiService', function() {
  // load the service's module
  beforeEach(module('ytMusicPlayerApp.youtubeDataApiService'));

  // instantiate service
  var youtubeDataApiService;
  beforeEach(inject(function(_youtubeDataApiService_) {
    youtubeDataApiService = _youtubeDataApiService_;
  }));

  it('should do something', function() {
    expect(!!youtubeDataApiService).toBe(true);
  });
});
