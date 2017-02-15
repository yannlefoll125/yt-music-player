'use strict';

import main from './main.component';
import youtubeDataApiServiceModule from '../youtubeDataApiService/youtubeDataApiService.mock';
import searchResultModelServiceModule from '../searchResultModel/searchResultModel.mock';

import SearchResultModel from '../searchResultModel/SearchResultModel.class';
import VideoResultViewModel from './VideoResultViewModel.class';

describe('Component: MainComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module(youtubeDataApiServiceModule));
  beforeEach(angular.mock.module(searchResultModelServiceModule));


  var MainComponent;
  var youtubeDataApiService;
  var searchResultModel;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, _youtubeDataApiService_, _searchResultModel_) {
    youtubeDataApiService = _youtubeDataApiService_;
    searchResultModel = _searchResultModel_;

    spyOn(searchResultModel, 'addListener');

    MainComponent = $componentController('main', {
      youtubeDataApiService,
      searchResultModel
    });
  }));

  it('should instantiate a youtubeDataApiService', function() {
    expect(MainComponent.youtubeDataApiService).toBeDefined();
  });

  it('should instantiate a searchResultModel', function() {
    expect(MainComponent.searchResultModel).toBeDefined();
  });

  it('should register a listener on searchResultModel service', function() {
    expect(searchResultModel.addListener).toHaveBeenCalled();
  });

  describe('videoResultViewModelFromModel()', function() {
    //input: list of SearchResultModel
    var input;
    var expected;
    var output;

    it('should return an empty list when input is an empty list', function() {
      input = [];
      expected = [];

      output = MainComponent.videoResultViewModelFromModel(input);

      expect(output).toEqual(expected);
    });

    it('should return a list of VideoResultViewModel', function() {
      input = [
        new SearchResultModel("title 1", "description 1", "videoId1"),
        new SearchResultModel("title 2", "description 2", "videoId2")
      ];

      expected = [
        new VideoResultViewModel("title 1", "description 1", "videoId1"),
        new VideoResultViewModel("title 2", "description 2", "videoId2")
      ];

      output = MainComponent.videoResultViewModelFromModel(input);

      expect(output).toEqual(expected);
    });


    //Ouput: list of VideoResultViewModel
  })



});
