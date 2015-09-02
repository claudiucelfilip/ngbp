angular.module('myapp')
    .config(function myAppConfig ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('common', {
                views: {
                    '@':             {
                        templateUrl: 'common/layout.html'
                    },
                    'sub-header@common': {
                        controller:  'SubHeaderCtrl',
                        templateUrl: 'common/sub-header/template.html'
                    },
                    'header@common': {
                        controller:  'HeaderCtrl',
                        templateUrl: 'common/header/template.html'
                    },

                    'footer@common': {
                        controller:  'FooterCtrl',
                        templateUrl: 'common/footer/template.html'
                    }
                }

            });
        $urlRouterProvider.otherwise('/home');
    });