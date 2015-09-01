angular.module('myapp')

    .config(function config ($stateProvider) {
        console.log('about');
        $stateProvider.state('common.about', {
            url:   '/about',
            views: {
                'main@common': {
                    controller:  'AboutCtrl',
                    templateUrl: 'pages/about/about.tpl.html'
                }
            },
            data:  {pageTitle: 'What is It?'}
        });
    });