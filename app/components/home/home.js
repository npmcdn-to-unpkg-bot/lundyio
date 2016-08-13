angular.module('home', [])
    .component('home', {
        templateUrl: './components/home/home.html',
        $canActivate: function() {

            console.log('Home Called');

            return true;
        },
        controller: function(dataService){

            console.log('Home Loaded');

            this.dataService = dataService;

        },
        controllerAs: 'vm'
    });

angular.module('app').requires.push('home');
