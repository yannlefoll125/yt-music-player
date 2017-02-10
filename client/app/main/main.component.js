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
  constructor($scope, youtubeDataApiService) {

    var self = this;

    this.searchResults = [];

    //Defining $scope event to listen to
    $scope.$on('artist-search-result-down', function(event, data) {
      console.log('MainController, received artist-search-result-down event');

        self.searchResults = [];

      
      for(var i of data) {
        self.searchResults.push(new VideoResultViewModel(i.snippet.title, i.snippet.description, i.id.videoId));
      }

      //console.log(self.searchResults);
    });

  }



/*searchVideo(query) {
  console.log('searchVideo: query=' + query);
  youtubeDataApiService.searchVideo(query, function(err, data) {
    console.log('searchVideo result: ' + JSON.stringify(data));
  });
}*/


}

MainComponent.$inject = ['$scope', 'youtubeDataApiService'];


export default angular.module('ytMusicPlayerApp.main', [ngRoute])
.config(routes)
.component('main', {
  template: require('./main.html'),
  controller: MainComponent

})
.name;
