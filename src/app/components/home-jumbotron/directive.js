angular.module('myapp')
    .directive('homeJumbotron', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/home-jumbotron/template.html'
        };
    });