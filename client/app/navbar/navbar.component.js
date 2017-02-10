'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: '/'
  }];

  isCollapsed = true;

  constructor($location, $scope) {
    'ngInject';

    this.$location = $location;
    this.$scope = $scope;
  }

  isActive(route) {
    return route === this.$location.path();
  }

  onSearchSubmit(key) {
    console.log('onSearchSubmit: ' + this.searchQuery);
    this.searchQuery = '';

    this.$scope.$emit('artist-search-result-up');
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
