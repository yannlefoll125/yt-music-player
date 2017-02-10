'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './main.routes';
import youtubeDataApiService from '../youtubeDataApiService/youtubeDataApiService.service';


class VideoResultViewModel {

  constructor(title, description) {
    this.title = title;
    this.description = description;

  }
    
}

export class MainComponent {

  /*@ngInject*/
  constructor(youtubeDataApiService) {
    this.searchResults = [];

    youtubeDataApiService.searchVideo("mgla full album", function(err, data) {
      if(err) {
        console.error('error while calling youtubeDataApiService.searchVideo(): ' + err);
      }

      console.log(data);
    })
  }

  




}

MainComponent.$inject = ['youtubeDataApiService'];

export default angular.module('ytMusicPlayerApp.main', [ngRoute])
.config(routes)
.component('main', {
  template: require('./main.html'),
  controller: MainComponent

})
.name;
