'use strict';

import album from './album.component';
import albumModelMock from './albumModel/albumModel.mock';
import youtubeApiServiceMock from '../youtubeDataApiService/youtubeDataApiService.mock';

import AlbumViewModel from './AlbumViewModel.class';

describe('Component: AlbumComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(album));
  beforeEach(angular.mock.module(albumModelMock));
  beforeEach(angular.mock.module(youtubeApiServiceMock));

  var AlbumComponent;
  var albumModel;
  var youtubeDataApiService;



  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, _youtubeDataApiService_, _albumModel_) {
    albumModel = _albumModel_;
    youtubeDataApiService = _youtubeDataApiService_;

    spyOn(albumModel, 'setControllerCallback');
    spyOn(youtubeDataApiService, 'getVideoDetail');

    AlbumComponent = $componentController('album', {
      youtubeDataApiService,
      albumModel
    });

    
  }));

  it('should instantiate a youtubeDataApiService', function() {
    expect(!!AlbumComponent.youtubeDataApiService).toBe(true);
  });

  it('should instantiate a albumModel service', function() {
    expect(!!AlbumComponent.albumModel).toBe(true);
  });

  it('should set albumModel controllerCallback', function() {

    expect(albumModel.setControllerCallback).toHaveBeenCalled();
  });

  it('should initialize this.albumViewModel', function() {

    expect(AlbumComponent.albumViewModel).toBeDefined();
    expect(AlbumComponent.albumViewModel instanceof AlbumViewModel).toBe(true);
  });

  it('should call youtubeDataApiService.getVideoDetail()', function() {

    expect(youtubeDataApiService.getVideoDetail).toHaveBeenCalled();
  });



});
