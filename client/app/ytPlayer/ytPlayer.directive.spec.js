'use strict';

import ytPlayer from './ytPlayer.directive';

describe('Directive: ytPlayer', function() {
  // load the directive's module
  beforeEach(angular.mock.module(ytPlayer));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
