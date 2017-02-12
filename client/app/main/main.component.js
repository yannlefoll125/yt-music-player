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
        self.searchResults = [];
        for(var i of self.searchResultModel.getVideoItemList()) {
          self.searchResults.push(new VideoResultViewModel(i.title, i.description, i.videoId));
        }

        break;
        default:
        break;
      }

    }


    this.searchResultModel = searchResultModel;
    this.searchResultModel.addListener(this.searchResultModelCallback);

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
