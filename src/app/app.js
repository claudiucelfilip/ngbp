angular.module('myapp', [
    'templates-app',
    'templates-common',
    'ui.router'
]).run(function () {
});


angular.element(document).ready(function() {
    angular.bootstrap(document, ['myapp']);
});