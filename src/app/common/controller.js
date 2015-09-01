angular.module('myapp')
    .controller('AppCtrl', function AppCtrl ($scope, $location) {
        $scope.bodyClasses = [];
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (toState.data && angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | myapp Boilerplate';
            }
            $scope.bodyClasses = [];
        });
    });