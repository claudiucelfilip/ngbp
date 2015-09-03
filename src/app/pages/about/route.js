angular.module('myapp')

    .config(function config ($stateProvider) {
        $stateProvider.state('common.about', {
            url:   '/about',
            views: {
                'main@common': {
                    controller:  'AboutCtrl',
                    templateUrl: 'pages/about/template.html'
                }
            },
            data:  {pageTitle: 'What is It?'}
        });
    });