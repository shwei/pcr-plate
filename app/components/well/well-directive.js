'use strict';

angular.module('myApp.well.well-directive', [])
    .directive('pcrWell', ['$mdDialog', function ($mdDialog) {
        return {
            restrict: 'A',
            scope: {
                wellId: '=pcrWell',
                color: '=pcrWellColor'
            },
            controller: function ($scope, $element, $attrs, $transclude) {

                // $scope.wellColor = {'background-color': $scope.color};
                $scope.showAdvanced = function(ev, wellId) {
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'components/well/form.tmpl.html',
                        // parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                        fullscreen: true,
                        locals: {
                            wellId: wellId
                        }
                    })
                        .then(function (answer) {
                            $scope.status = 'You said the information was "' + answer + '".';
                        }, function () {
                            $scope.status = 'You cancelled the dialog.';
                        });
                };
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


        function DialogController ($scope, $mdDialog, wellId) {
            $scope.wellId = wellId;
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    }]);