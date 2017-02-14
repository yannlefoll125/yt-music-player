'use strict';

import main from './main.component';
import youtubeDataApiServiceModule from '../youtubeDataApiService/youtubeDataApiService.service';
import searchResultModelServiceModule from '../searchResultModel/searchResultModel.service';

describe('Component: MainComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module(youtubeDataApiServiceModule));
  beforeEach(angular.mock.module(searchResultModelServiceModule));



  var MainComponent;
  var youtubeDataApiService;
  var searchResultModelService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, _youtubeDataApiService_, _searchResultModelService_) {

    youtubeDataApiService = _youtubeDataApiService_;
    searchResultModelService = _searchResultModelService_;

    MainComponent = $componentController('main', {
      'youtubeDataApiService': youtubeDataApiService,
      'searchResultModelService': searchResultModelService
    });
  }));

  it('should test ...', function() {
    expect(1).toEqual(1);
  });
});
