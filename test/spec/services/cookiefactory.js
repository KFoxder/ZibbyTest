'use strict';

describe('Service: cookieFactory', function () {

  // load the service's module
  beforeEach(module('zibbyFilterApp'));

  // instantiate service
  var cookieFactory;
  beforeEach(inject(function (_cookieFactory_) {
    cookieFactory = _cookieFactory_;
  }));

  it('should do something', function () {
    expect(!!cookieFactory).toBe(true);
  });

});
