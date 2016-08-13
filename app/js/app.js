var app = angular.module('app', ['ngComponentRouter']);

app.value('$routerRootComponent', 'app');

app.component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
        {
            path: '/home',
            name: 'Home',
            component: 'home'
        },
        {
            path: '/*path',
            redirectTo:['Home']
        }
    ]
});

app.controller('AppController', function($http, dataService, $timeout){

    // Expose data service to view
    this.dataService = dataService;
    
});

app.service('dataService', function($http, $rootRouter) {
    var service = this;

});