'use strict';
const angular = require('angular');

/*@ngInject*/
export function rootController($scope) {
  $scope.$on('artist-search-result-up', function(event, data) {
  	console.log('RootController, received artist-search-result-up event');

  	$scope.$broadcast('artist-search-result-down', data);


  });
}

export default angular.module('ytMusicPlayerApp.root', [])
  .controller('RootController', rootController)
  .name;
