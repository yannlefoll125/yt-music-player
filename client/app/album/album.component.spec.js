'use strict';

import album from './album.component';
import albumModelMock from './albumModel/albumModel.mock';
import youtubeApiServiceMock from '../youtubeDataApiService/youtubeDataApiService.mock';

describe('Component: AlbumComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(album));
  beforeEach(angular.mock.module(albumModelMock));
  beforeEach(angular.mock.module(youtubeApiServiceMock));

  var AlbumComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, youtubeDataApiService, albumModel) {
    AlbumComponent = $componentController('album', {
      youtubeDataApiService,
      albumModel
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
