'use strict';

import searchResultModelService from './searchResultModel.service';

describe('Service: searchResultModel', function() {
  // load the service's module
  beforeEach(angular.mock.module(searchResultModelService));

  // instantiate service
  var searchResultModel;
  beforeEach(inject(function(_searchResultModel_) {
    searchResultModel = _searchResultModel_;
  }));

  it('should do something', function() {
    expect(!!searchResultModel).toBe(true);
  });
});
