'use strict';

angular.module('myApp.well.well-directive', [])
    .directive('pcrWell', [function () {
        return {
            restrict: 'A',
            scope: {
                wellId: '=pcrWell',
                color: '=pcrWellColor',
                reactionTime: '=pcrWellReactionTime'
            },
            controller: function ($scope, $element, $attrs, $transclude) {
            },
            link: function(scope, element, attributes, controller, transcludeFn) {
                scope.$watch('color', function (newVal, oldVal) {
                    if (!newVal) {
                        return;
                    }

                    scope.wellColor = {'background-color': newVal};
                });
            },
            templateUrl: 'components/well/well.html'
        };
    }]);