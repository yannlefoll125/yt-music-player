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

  constructor($location, $scope, youtubeDataApiService) {
    'ngInject';

    this.$location = $location;
    this.$scope = $scope;
    this.youtubeDataApiService = youtubeDataApiService;
  }

  isActive(route) {
    return route === this.$location.path();
  }

  onSearchSubmit() {
    console.log('onSearchSubmit: ' + this.searchQuery);

    var self = this;

    this.youtubeDataApiService.searchVideo(this.searchQuery, function(err, data) {
      if(err) {
        console.error('youtubeDataApiService.searchVideo error: ' + err);
      }

      self.$scope.$emit('artist-search-result-up', data);      
    })




    this.searchQuery = '';

    
  }
}

NavbarComponent.$inject = ['$location', '$scope', 'youtubeDataApiService'];

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
