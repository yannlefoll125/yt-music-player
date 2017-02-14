'use strict';

import main from './main.component';

describe('Component: MainComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(main));

  var MainComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MainComponent = $componentController('main', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
