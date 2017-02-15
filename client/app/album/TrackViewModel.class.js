'use strict';

export default class TrackViewModel {
  constructor(trackModel) {
    this.num = trackModel.num;
    this.title = trackModel.title;
    this.length = trackModel.length;
  }
}