'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {
        resetInputValues();

        var colors = [
            '#eceff1',  '#f3e5f5',	'#e8eaf6',	'#e1f5fe',	'#e0f2f1',	'#fff8e1',	'#fff3e0',	'#efebe9',	'#f1f8e9',
            '#ffebee',  '#ffcdd2',  '#ef9a9a',  '#e57373',	'#ef5350',  '#1abc9c',  '#2ecc71',  '#3498db',  '#9b59b6',
            '#cfd8dc',	'#e1bee7',	'#c5cae9',	'#b3e5fc',	'#b2dfdb',	'#ffecb3',	'#ffe0b2',	'#d7ccc8',	'#dcedc8',
            '#b0bec5',	'#ce93d8',	'#9fa8da',	'#81d4fa',	'#80cbc4',	'#ffe082',	'#ffcc80',	'#bcaaa4',	'#c5e1a5',
            '#90a4ae',	'#ba68c8',	'#7986cb',	'#4fc3f7',	'#4db6ac',	'#ffd54f',	'#ffb74d',	'#a1887f',	'#aed581',
            '#78909c',	'#ab47bc',	'#5c6bc0',	'#29b6f6',	'#26a69a',	'#ffca28',	'#ffa726',	'#8d6e63',	'#9ccc65',
            '#16a085',  '#27ae60',  '#2980b9',  '#8e44ad',  '#f1c40f',  '#e67e22',  '#e74c3c',  '#95a5a6',  '#7f8c8d',
            '#bdc3c7',  '#f39c12',  '#d35400',  '#c0392b'
        ];
        shuffleColors(colors);
        var removedColors = [];

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var wellCodes = {};

        $scope.nameToColors = {};
        $scope.wellPlate = {
            A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: []
        };

        var rowKeys = Object.keys($scope.wellPlate);

        for (var k = 0; k < rowKeys.length; k++) {
            var rowKey = rowKeys[k];

            for (var i = 0; i < 12; i++) {
                $scope.wellPlate[rowKey].push({
                    row: rowKey,
                    col: i+1,
                    color: '#ffffff',
                    code: getRandomCode()
                });
            }
        }

        $scope.$watch('inputName', function (newValue) {
            if (typeof newValue !== 'undefined') {
                if (newValue.length === 0) {
                    var actualNameMaxLength = $scope.nameMaxLength;
                    $scope.nameMaxLength = 65;
                    $timeout(function () {
                        $scope.nameMaxLength = actualNameMaxLength;
                    });
                }
            }
        }, true);

        $scope.selectWell = function (row, col) {
            $scope.inputWell.row = $scope.wellPlate[row][col].row;
            $scope.inputWell.col = $scope.wellPlate[row][col].col;
            $scope.inputWell.reactionTime = $scope.wellPlate[row][col].reactionTime;
            $scope.inputWell.color = $scope.wellPlate[row][col].color;
            $scope.inputName = $scope.wellPlate[row][col].name;
        };

        $scope.addInputValues = function () {
            if (!$scope.inputWell.row || !$scope.inputWell.col) {
                return;
            }

            var row = $scope.inputWell.row;
            var col = $scope.inputWell.col - 1;

            if ($scope.inputName) {
                var color = colors.pop();
                removedColors.push(color);

                if (!$scope.nameToColors[$scope.inputName]) {
                    $scope.nameToColors[$scope.inputName] = color;
                }

                $scope.inputWell.color = $scope.nameToColors[$scope.inputName];
            }

            $scope.wellPlate[row][col]['row'] = $scope.inputWell.row;
            $scope.wellPlate[row][col]['col'] = $scope.inputWell.col;
            $scope.wellPlate[row][col]['reactionTime'] = $scope.inputWell.reactionTime;
            $scope.wellPlate[row][col]['name'] = $scope.inputName;
            $scope.wellPlate[row][col]['color'] = $scope.inputWell.color;

            resetInputValues();
        };

        $scope.removeInputValues = function () {
            if (!$scope.inputWell.row || !$scope.inputWell.col) {
                return;
            }

            var row = $scope.inputWell.row;
            var col = $scope.inputWell.col - 1;
            $scope.wellPlate[row][col]['reactionTime'] = null;
            $scope.wellPlate[row][col]['name'] = null;
            $scope.wellPlate[row][col]['color'] = '#ffffff';

            resetInputValues();
        };


        function resetInputValues () {
            $scope.inputWell = {color: '#ffffff'};
            $scope.inputWell.row = null;
            $scope.inputWell.col = null;
            $scope.inputWell.reactionTime = null;
            $scope.inputName = '';
            $scope.nameMaxLength = 64;
        }


        function getRandomCode () {
            var text = "";

            for (var i = 0; i < 3; i++) {
                text += possible.charAt(Math.floor(Math.random() * (possible.length)));
            }

            if (!wellCodes[text]) {
                wellCodes[text] = 1;
                return text;
            }

            return getRandomCode();
        }

        function shuffleColors (colors) {
            var i = 0;
            var j = 0;
            var temp = null;

            for (i = colors.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1))
                temp = colors[i]
                colors[i] = colors[j]
                colors[j] = temp
            }
        }
    }]);