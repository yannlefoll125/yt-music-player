'use strict';

import TrackViewModel from './TrackViewModel.class';

export default class AlbumViewModel {
  constructor() {
    this.title = 'default title (ViewModel)';
    this.description = 'default description (ViewModel)';
  }

  setValuesFromAlbumModel(albumModel) {
    this.title = albumModel.title;
    this.description = albumModel.description;
    this.thumbnails = { default: albumModel.thumbnails.default };
    this.trackList = [];

    for(var tm of albumModel.trackList) {
      this.trackList.push(new TrackViewModel(tm));
    }

    console.log(this);
  }
}