'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      template: '<main></main>'
    });
}
