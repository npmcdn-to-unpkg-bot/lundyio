angular.module('home', [])
    .component('home', {
        templateUrl: './components/home/home.html',
        $canActivate: function() {

            console.log('Home Called');

            return true;
        },
        controller: function(dataService, $timeout){

            console.log('Home Loaded');

            this.dataService = dataService;

            $timeout(function(){
                window.location.href = 'https://www.linkedin.com/in/lundyhartshorn';
            });

        },
        controllerAs: 'vm'
    });

angular.module('app').requires.push('home');
