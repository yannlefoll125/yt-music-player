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

  }

  findTrackViewModelByNumber(number) {

    for(var t of this.trackList) {
      if(t.num == number) {
        return t;
      }
    }
  }

  findTrackViewModelIndexByNumber(number) {
    const trackNumber = this.trackList.length;

    for(var i = 0; i < trackNumber; i++) {
      if(this.trackList[i].num == number) {
        return i;
      }
    }
  }

  setActiveTrack(trackNumber) {
    for(var t of this.trackList) {

      t.active = t.num == trackNumber;
    }
  }
}