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
  constructor($scope, youtubeDataApiService, currentSearch) {

    var self = this;

    this.searchResults = [];

    this.currentSearchCallback = function(event) {
    console.log('currentSearchCallback: ' + event)
    switch(event) {
      case 'video-item-list-update':
          self.searchResults = [];
        for(var i of self.currentSearch.getVideoItemList()) {
          self.searchResults.push(new VideoResultViewModel(i.snippet.title, i.snippet.description, i.id.videoId));
        }

      break;
      default:
      break;
    }

  }


    this.currentSearch = currentSearch;
    this.currentSearch.addListener(this.currentSearchCallback);

    

  }

  



/*searchVideo(query) {
  console.log('searchVideo: query=' + query);
  youtubeDataApiService.searchVideo(query, function(err, data) {
    console.log('searchVideo result: ' + JSON.stringify(data));
  });
}*/


}

MainComponent.$inject = ['$scope', 'youtubeDataApiService', 'currentSearch'];


export default angular.module('ytMusicPlayerApp.main', [ngRoute])
.config(routes)
.component('main', {
  template: require('./main.html'),
  controller: MainComponent

})
.name;
