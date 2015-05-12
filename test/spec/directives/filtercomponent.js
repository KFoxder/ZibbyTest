'use strict';

describe('Directive: filterComponent', function () {

  // load the directive's module
  beforeEach(module('zibbyFilterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<filter-component></filter-component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the filterComponent directive');
  }));
});
