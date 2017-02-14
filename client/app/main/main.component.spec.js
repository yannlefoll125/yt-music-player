'use strict';

import main from './main.component';
import youtubeDataApiServiceModule from '../youtubeDataApiService/youtubeDataApiService.mock';
import searchResultModelServiceModule from '../searchResultModel/searchResultModel.mock';

describe('Component: MainComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module(youtubeDataApiServiceModule));
  beforeEach(angular.mock.module(searchResultModelServiceModule));



  var MainComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, youtubeDataApiService, searchResultModel) {


    MainComponent = $componentController('main', {
      youtubeDataApiService,
      searchResultModel
    });
  }));

  it('should test ...', function() {
    expect(1).toEqual(1);
  });
});
