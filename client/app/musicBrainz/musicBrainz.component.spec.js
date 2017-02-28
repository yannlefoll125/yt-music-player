'use strict';

describe('Component: MusicBrainzComponent', function() {
  // load the controller's module
  beforeEach(module('ytMusicPlayerApp.musicBrainz'));

  var MusicBrainzComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MusicBrainzComponent = $componentController('musicBrainz', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
