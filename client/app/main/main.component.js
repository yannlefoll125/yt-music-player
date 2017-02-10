'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './main.routes';


class VideoResultViewModel {

  constructor(title, description) {
    this.title = title;
    this.description = description;

  }
    
}

export class MainComponent {

  /*@ngInject*/
  constructor($scope, youtubeDataApiService) {

    var self = this;

    this._scope = $scope;

    this.searchResults = [];

    //Defining $scope event to listen to
    $scope.$on('artist-search-result-down', function(event, data) {
      console.log('MainController, received artist-search-result-down event');
      
      for(var i of data.items) {
        self.searchResults.push(new VideoResultViewModel(i.snippet.title, i.snippet.description));
      }

      console.log(self.searchResults);
    });
  }


}

MainComponent.$inject = ['$scope', 'youtubeDataApiService'];

export default angular.module('ytMusicPlayerApp.main', [ngRoute])
.config(routes)
.component('main', {
  template: require('./main.html'),
  controller: MainComponent

})
.name;
