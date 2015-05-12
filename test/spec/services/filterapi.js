'use strict';

describe('Service: filterAPI', function () {

  // load the service's module
  beforeEach(module('zibbyFilterApp'));

  // instantiate service
  var filterAPI;
  beforeEach(inject(function (_filterAPI_) {
    filterAPI = _filterAPI_;
  }));

  it('should do something', function () {
    expect(!!filterAPI).toBe(true);
  });

});
