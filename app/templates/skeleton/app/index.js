window.angular = require('angular');
require('angular-ui-router');

angular.module('bs-app', [
    // external modules
    'ui.router',
    
    // app modules    
    require('./main/main-module').name
])

.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
})

.run(function($state) {
    // go to the main state
    $state.go('main');
})
;

try {
    angular.bootstrap(document.getElementById('bs-app'), ['bs-app']);
} catch (e) {
    console.error(e.stack || e.message || e);
}