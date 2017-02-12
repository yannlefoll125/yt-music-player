'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './main.routes';
import youtubeDataApiService from '../youtubeDataApiService/youtubeDataApiService.service';



class VideoResultViewModel {

  constructor(title, description, videoId) {
    this.title = title;
    this.description = description;
    this.videoId = videoId;

  }

}

export class MainComponent {

  /*@ngInject*/
  constructor($scope, youtubeDataApiService, searchResultModel) {

    var self = this;

    this.searchResults = [];

    this.searchResultModelCallback = function(event) {

      switch(event) {
        case 'video-item-list-update':
        self.searchResults = self.videoResultViewModelFromModel(self.searchResultModel);

        break;
        default:
        break;
      }

    }


    this.searchResultModel = searchResultModel;
    this.searchResultModel.addListener(this.searchResultModelCallback);
    this.searchResults = this.videoResultViewModelFromModel(this.searchResultModel);


  }

  videoResultViewModelFromModel(model) {
    var searchResults = [];
    for(var i of model.getVideoItemList()) {

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
