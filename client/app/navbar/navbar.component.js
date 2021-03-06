'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
//import youtubeDataApiService from '../youtubeDataApiService/youtubeDataApiService.service';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: '/'
  }];

  isCollapsed = true;

  constructor($location, $scope, youtubeDataApiService, searchResultModel) {
    'ngInject';

    this.$location = $location;
    this.$scope = $scope;
    this.youtubeDataApiService = youtubeDataApiService;
    this.searchResultModel = searchResultModel;
  }

  isActive(route) {
    return route === this.$location.path();
  }

  onSearchSubmit() {

    var self = this;

    this.youtubeDataApiService.searchVideo(this.searchQuery, function(err, itemList) {
      if(err) {
        console.error('youtubeDataApiService.searchVideo error: ' + err);
      }
      
      self.searchResultModel.setVideoItemList(itemList);

      self.$location.path('/');

      //self.$scope.$emit('artist-search-result-up');      
    })




    this.searchQuery = '';

    
  }
}

NavbarComponent.$inject = ['$location', '$scope', 'youtubeDataApiService', 'searchResultModel'];

export default angular.module('directives.navbar', [])
.component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent
})
.name;
