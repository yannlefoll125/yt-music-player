'use strict';
const angular = require('angular');

/*@ngInject*/
export function secToMinSecFilter() {
  return function(input) {
  	if(!input) {
  		return '';
  	}

    if(typeof input == 'string') {
      input = parseInt(input.split(',').join(''));
    }
    

  	var min = Math.floor(input / 60);
  	var sec = input % 60;

    return min + ':' + (sec < 10 ? '0' + sec : '' + sec);
  };
}


export default angular.module('ytMusicPlayerApp.secToMinSec', [])
  .filter('secToMinSec', secToMinSecFilter)
  .name;
