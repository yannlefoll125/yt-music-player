'use strict';
const angular = require('angular');

/*@ngInject*/
export function secToMinSecFilter() {
  return function(input) {
  	if(!input) {
  		return '';
  	}

  	var min = Math.floor(input / 60);
  	var sec = input % 60;

  	var secStr;

  	if(sec < 10) {
  		secStr = '0' + sec; 
  	} else {
  		secStr = '' + sec;
  	}

    return min + ':' + secStr;
  };
}


export default angular.module('ytMusicPlayerApp.secToMinSec', [])
  .filter('secToMinSec', secToMinSecFilter)
  .name;
