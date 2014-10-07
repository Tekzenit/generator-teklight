require('./main-service.js');
require('./main-directive.js');
require('./main-controller.js');
module.exports.name = 'main';

angular.module(module.exports.name, [
    'main-controller'
])

/// configure the main module
.config(function($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'main/main.html',
            controller: 'main'
        });
})

;