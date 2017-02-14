'use strict';

import youtubeDataApiMockService from './youtubeDataApiMockService.service';

describe('Service: youtubeDataApiMockService', function() {
  // load the service's module
  beforeEach(angular.mock.module(youtubeDataApiMockService));

  // instantiate service
  var youtubeDataApiService;
  beforeEach(inject(function(_youtubeDataApiService_) {
    youtubeDataApiService = _youtubeDataApiService_;
  }));

  it('should do something', function() {
    expect(!!youtubeDataApiService).toBe(true);
  });


});
