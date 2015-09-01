angular.module('myapp')
    .config(function myAppConfig ($stateProvider, $urlRouterProvider) {
        console.log('common');
        $stateProvider

            .state('common', {

                views: {
                    '@':             {
                        templateUrl: 'common/layout.tpl.html'
                    },
                    'header@common': {
                        controller:  'HeaderCtrl',
                        templateUrl: 'common/header/header.tpl.html'
                    },

                    'footer@common': {
                        controller:  'FooterCtrl',
                        templateUrl: 'common/footer/footer.tpl.html'
                    }
                }

            });
        $urlRouterProvider.otherwise('/home');
    });