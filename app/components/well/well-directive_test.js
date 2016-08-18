'use strict';

describe('myApp.well module', function () {
    beforeEach(module('myApp.well'));

    describe('pcr-well directive', function () {
        it('should print current well ID', function () {
            module(function ($provide) {
            });

            inject(function ($compile, $rootScope) {
                var element = $compile('<span pcr-well="1234"></span>')($rootScope);
                expect(element.html()).toEqual('');
            });
        });
    });
});
