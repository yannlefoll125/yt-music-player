'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/album/:videoId', {
      template: '<album></album>'
    });
}
