'use strict';

describe('Service: searchResultModel', function() {
  // load the service's module
  beforeEach(module('ytMusicPlayerApp.searchResultModel'));

  // instantiate service
  var searchResultModel;
  beforeEach(inject(function(_searchResultModel_) {
    searchResultModel = _searchResultModel_;
  }));

  it('should do something', function() {
    expect(!!searchResultModel).toBe(true);
  });
});
