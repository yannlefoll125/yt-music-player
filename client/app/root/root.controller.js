'use strict';
const angular = require('angular');

/*@ngInject*/
export function rootController($scope) {
  /*$scope.$on('artist-search-result-up', function(event) {
  	console.log('RootController, received artist-search-result-up event');

  	$scope.$broadcast('artist-search-result-down');


  });*/

  $scope.$on('search-submit-event-up', function(event, query) {
  	console.log('RootController: received search-submit-event-up with query: ' + query);
  	$scope.$broadcast('search-submit-event-down', query);
  });
}

export default angular.module('ytMusicPlayerApp.root', [])
  .controller('RootController', rootController)
  .name;
