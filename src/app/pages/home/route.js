angular.module('myapp')
    .config(function config ($stateProvider) {
        console.log('home');
        $stateProvider.state('common.home', {
            url:   '/home',
            views: {
                'main@common': {
                    controller:  'HomeCtrl',
                    templateUrl: 'pages/home/template.html'
                }
            },
            data:  {
                pageTitle: 'Home'
            }
        });

    })
;

