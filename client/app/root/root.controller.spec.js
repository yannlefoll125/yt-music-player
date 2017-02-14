'use strict';

import root from './root.controller';

describe('Controller: RootCtrl', function() {
  // load the controller's module
  beforeEach(angular.mock.module(root));

  var RootCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    RootCtrl = $controller('RootController', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
