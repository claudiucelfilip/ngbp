angular.module('myapp')
    .directive('bodyClass', function ($rootScope) {

        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs, ctrl) {
                scope.bodyClasses.push(attrs.bodyClass);
            }
        };
    });