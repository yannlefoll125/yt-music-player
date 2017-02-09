'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './main.routes';

export class MainComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }


}

export default angular.module('ytMusicPlayerApp.main', [ngRoute])
  .config(routes)
  .component('main', {
    template: require('./main.html'),
    controller: MainComponent

  })
  .name;
