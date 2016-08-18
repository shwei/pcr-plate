'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$scope', function ($scope) {
        var colors = [
            '#F1F8E9',
            '#DCEDC8',
            '#C5E1A5',
            '#AED581',
            '#9CCC65',
            '#8BC34A',
            '#7CB342',
            '#689F38',
            '#558B2F',
            '#33691E',
            '#E1F5FE',
            '#B3E5FC',
            '#81D4FA',
            '#4FC3F7',
            '#29B6F6',
            '#03A9F4',
            '#039BE5',
            '#0288D1',
            '#0277BD',
            '#01579B'
        ];
        var removedColors = [];

        $scope.inputWell = {color: '#ffffff'};
        $scope.inputWell.row;
        $scope.inputWell.col;
        $scope.inputWell.reactionTime;
        $scope.inputWell.name;

        $scope.nameToColors = {};

        $scope.wellPlate = {
            A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: []
        };

        var rowKeys = Object.keys($scope.wellPlate);

        for (var k = 0; k < rowKeys.length; k++) {
            var rowKey = rowKeys[k];

            for (var i = 0; i < 12; i++) {
                $scope.wellPlate[rowKey].push({row: rowKey, col: i+1, color: '#ffffff'});
            }
        }


        $scope.selectWell = function (row, col) {
            $scope.inputWell = $scope.wellPlate[row][col];
        };

        $scope.addInputValues = function () {
            if (!$scope.inputWell.row || !$scope.inputWell.col) {
                return;
            }

            var row = $scope.inputWell.row;
            var col = $scope.inputWell.col - 1;

            if ($scope.inputWell.name) {
                var color = colors.pop();
                removedColors.push(color);

                if (!$scope.nameToColors[$scope.inputWell.name]) {
                    $scope.nameToColors[$scope.inputWell.name] = color;
                }

                $scope.inputWell.color = $scope.nameToColors[$scope.inputWell.name];
            }

            $scope.wellPlate[row][col] = $scope.inputWell;
        }
        $scope.removeInputValues = function () {
            if (!$scope.inputWell.row || !$scope.inputWell.col) {
                return;
            }

            var row = $scope.inputWell.row;
            var col = $scope.inputWell.col - 1;
            $scope.wellPlate[row][col]['reactionTime'] = null;
            $scope.wellPlate[row][col]['name'] = null;
            $scope.wellPlate[row][col]['color'] = '#ffffff';
        }
    }]);