'use strict';

describe('Directive: print', function () {

  // load the directive's module
  beforeEach(module('angularPrintingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<print></print>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the print directive');
  }));
});
