'use strict';

import album from './album.component';

describe('Component: AlbumComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(album));

  var AlbumComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AlbumComponent = $componentController('album', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
