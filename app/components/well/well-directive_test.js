'use strict';

describe('myApp.well module', function () {
    beforeEach(module('myApp.well'));

    describe('pcr-well directive', function () {
        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span pcr-well></span>')($rootScope);
                expect(element.text()).toEqual('');
            });
        });
    });
});
