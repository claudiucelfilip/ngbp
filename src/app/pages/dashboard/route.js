angular.module('myapp')

    .config(function config ($stateProvider) {

        $stateProvider.state('common.dashboard', {
            url:   '/dashboard',
            views: {
                'main@common': {
                    controller:  'DashboardCtrl',
                    templateUrl: 'pages/dashboard/template.html'
                }
            },
            data:  {
                pageTitle: 'What is It?'
            }
        });
    });