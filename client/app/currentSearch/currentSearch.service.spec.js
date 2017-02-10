'use strict';

describe('Service: currentSearch', function() {
  // load the service's module
  beforeEach(module('ytMusicPlayerApp.currentSearch'));

  // instantiate service
  var currentSearch;
  beforeEach(inject(function(_currentSearch_) {
    currentSearch = _currentSearch_;
  }));

  it('should do something', function() {
    expect(!!currentSearch).toBe(true);
  });
});
