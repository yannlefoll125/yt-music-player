'use strict';

import secToMinSecModule from './secToMinSec.filter';

describe('Filter: secToMinSec', function() {
  // load the filter's module
  beforeEach(angular.mock.module(secToMinSecModule));

  // initialize a new instance of the filter before each test
  var secToMinSec;
  beforeEach(inject(function($injector) {
    secToMinSec = $injector.get('$filter')('secToMinSec');
  }));

  it('should return the input given in seconds (number) in {M{1,2}:SS} format (125 -> 2:05)', function() {
    var input = 125;
    expect(secToMinSec(input)).toBe('2:05');
  });

  it('should return the input given in seconds (number) in {M{1,2}:SS} format (256 -> 4:16)', function() {
    var input = 256;
    expect(secToMinSec(input)).toBe('4:16');
  });

  it('should return the input given in seconds (number) in {SS} format (24 -> 0:24)', function() {
    var input = 24;
    expect(secToMinSec(input)).toBe('0:24');
  });

  it('should return the input given in seconds (string) in {M{1,2}:SS} format (\'125\' -> 2:05)', function() {
    var input = '125';
    expect(secToMinSec(input)).toBe('2:05');
  });

  it('should return an empty string when the input is undefined', function() {
    var input = undefined;
    expect(secToMinSec(input)).toBe('');
  });

  it('should return an empty string when the input is an empty string', function() {
    var input = '';
    expect(secToMinSec(input)).toBe('');
  });

  it('should return an empty string when the input is null', function() {
    var input = null;
    expect(secToMinSec(input)).toBe('');
  });
});
