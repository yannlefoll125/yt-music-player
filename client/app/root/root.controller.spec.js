'use strict';

import root from './root.controller';

describe('Controller: RootCtrl', function() {
  // load the controller's module
  beforeEach(angular.mock.module(root));

  var RootCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    RootCtrl = $controller('RootCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
