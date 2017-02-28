'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: '/'
  },
  {
    title: 'MB Search',
    link: '/musicBrainz'
  }];

  isCollapsed = true;

  currentPath;

  constructor($location, $scope) {
    'ngInject';

    this.$location = $location;
    this.$scope = $scope;

  }

  isActive(route) {
    return route === this.$location.path();
  }

  onSearchSubmit() {
    console.log('onSearchSubmit()');

    this.$scope.$emit('search-submit-event-up', this.searchQuery);
    this.searchQuery = '';

  }
}

NavbarComponent.$inject = ['$location', '$scope'];

export default angular.module('directives.navbar', [])
.component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent
})
.name;
