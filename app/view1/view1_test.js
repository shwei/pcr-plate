'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function () {
        var $scope = {};
        it('Check default values set in the Well Plate object', inject(function ($controller) {
            var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
            var plateRows = Object.keys($scope.wellPlate);

            expect(plateRows.length).toEqual(8);
            expect(plateRows[0]).toEqual('A');
            expect($scope.wellPlate[plateRows[0]][0].color).toEqual('#ffffff');
        }));
    });
});