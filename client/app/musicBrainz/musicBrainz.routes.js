'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/musicBrainz', {
      template: '<music-brainz></music-brainz>'
    });
}
