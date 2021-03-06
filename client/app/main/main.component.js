'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './main.routes';
import youtubeDataApiService from '../youtubeDataApiService/youtubeDataApiService.service';
import VideoResultViewModel from './VideoResultViewModel.class';

export class MainComponent {

  /*@ngInject*/
  constructor($scope, youtubeDataApiService, searchResultModel) {

    var self = this;

    this.searchResultModel = searchResultModel;
    this.youtubeDataApiService = youtubeDataApiService;

    this.searchResults = [];

    this.searchResultModelCallback = function(event) {

      switch(event) {
        case 'video-item-list-update':
        self.searchResults = self.videoResultViewModelFromModel(self.searchResultModel.getVideoItemList());

        break;
        default:
        break;
      }

    }

    this.searchResultModel.addListener(this.searchResultModelCallback);
    this.searchResults = this.videoResultViewModelFromModel(this.searchResultModel.getVideoItemList());

  }

  videoResultViewModelFromModel(searchResultModelList) {

    var searchResults = [];
    for(var i of searchResultModelList) {

      searchResults.push(new VideoResultViewModel(i.title, i.description, i.videoId));
    }

    return searchResults;
  }

}

MainComponent.$inject = ['$scope', 'youtubeDataApiService', 'searchResultModel'];


export default angular.module('ytMusicPlayerApp.main', [ngRoute])
.config(routes)
.component('main', {
  template: require('./main.html'),
  controller: MainComponent

})
.name;
